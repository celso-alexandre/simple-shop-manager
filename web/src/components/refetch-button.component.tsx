import React, { useEffect, useMemo, useState } from 'react';
import { Button, Progress, Select } from 'antd';
import { AiFillCaretDown, AiOutlineReload } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '2px',
    backgroundColor: (props: { isLoading: boolean; disabled: boolean }) => {
      return props.isLoading || props.disabled ? '#bdbdbd' : '#fbb01a';
    },
    '& .ant-select-selector, & .ant-select-clear': {
      backgroundColor: (props: { isLoading: boolean; disabled: boolean }) => {
        return props.isLoading || props.disabled ? '#bdbdbd' : '#fbb01a';
      },
      padding: '0 4px',
    },
    '& .ant-progress-inner': {
      position: 'absolute',
      bottom: 0,
    },
    '& .ant-progress-bg, & .ant-progress': {
      height: '3px !important',
    },
    '& .ant-progress-bg': {
      backgroundColor: (props: { isLoading: boolean; disabled: boolean }) => {
        return props.isLoading ? '#bdbdbd' : '#fbb01a';
      },
    },
  },
  refetchContainer: {
    transition: 'all 0.3s !important',
    '&:disabled': {
      backgroundColor: '#bdbdbd !important',
    },
  },
});

export type RefetchButtonProps = {
  setRefetch: () => void;
  defaultSelected?: number;
  isLoading: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const RefetchButton: React.FC<RefetchButtonProps> = ({
  setRefetch,
  isLoading,
  defaultSelected = 0,
  disabled,
  ...rest
}) => {
  const [progress, setProgress] = useState(0);
  const [selectedValue, setSelectedValue] = useState(defaultSelected);
  const { refetchContainer, container } = useStyles({
    isLoading,
    disabled: false,
  });

  const { startMilli, endMilli } = useMemo(() => {
    return isLoading
      ? { startMilli: 0, endMilli: 0 }
      : { startMilli: Date.now(), endMilli: Date.now() + selectedValue };
  }, [isLoading, selectedValue]);

  const updateProgress = () => {
    setProgress((prev) => {
      if (prev >= 100) {
        setRefetch();
        return 0;
      }
      return ((Date.now() - startMilli) / (endMilli - startMilli)) * 100;
    });
  };

  useEffect(() => {
    if (disabled) setProgress(0);
  }, [disabled]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedValue && !isLoading && !disabled) {
        updateProgress();
      }
    }, 1000);
    setProgress(0);
    return () => {
      clearInterval(intervalId);
    };
  }, [startMilli, endMilli, isLoading, disabled]);

  return (
    <div className={container} {...rest}>
      <Button
        type="text"
        disabled={disabled || isLoading}
        icon={
          <AiOutlineReload
            color="white"
            size={18}
            className={isLoading ? 'anticon anticon-spin' : 'anticon'}
          />
        }
        onClick={() => {
          setRefetch();
        }}
        size="middle"
        className={refetchContainer}
      />

      <Select
        showSearch={false}
        popupMatchSelectWidth={200}
        variant="borderless"
        disabled={true}
        allowClear
        suffixIcon={<AiFillCaretDown color="#FFF" />}
        // clearIcon={() => {
        //   return <AiFillCloseCircle color="#FFF" enableBackground={0} />;
        // }}
        style={{
          color: '#FFF',
        }}
        value={selectedValue || undefined}
        onChange={(value) => {
          setSelectedValue(value);
        }}
        onClear={() => {
          setSelectedValue(0);
          setProgress(0);
        }}>
        <Select.Option value={10000}>10s</Select.Option>
        <Select.Option value={60000}>1m</Select.Option>
        <Select.Option value={300000}>5m</Select.Option>
        <Select.Option value={900000}>15m</Select.Option>
      </Select>

      {!!selectedValue && (
        <Progress
          percent={progress}
          showInfo={false}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 0,
            margin: 0,
          }}
        />
      )}
    </div>
  );
};
