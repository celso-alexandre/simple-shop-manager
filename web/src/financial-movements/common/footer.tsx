import { formatMoneyFromInt } from '../../helpers';

type Props = {
  value: number;
  pendingMovement?: {
    value: number;
    prevValue: number;
  };
};
export function FinancialMovementsFooter({ value, pendingMovement }: Props) {
  const hasPMove = !!pendingMovement;
  const balanceAfter =
    value + ((pendingMovement?.value || 0) - (pendingMovement?.prevValue || 0));

  return (
    <div className="relative rounded-lg border border-gray-300 p-4">
      <div>
        <h3 className="absolute -top-3 left-4 bg-white px-2 text-sm font-semibold text-gray-700">
          Caixa
        </h3>

        <div className="grid grid-cols-1 gap-x-28 sm:gap-x-12 lg:grid-cols-5">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Total</span>
            <span className="text-gray-900">
              {formatMoneyFromInt(value)}
              {(value || 0) < 0 ? (
                <span className="ml-2 text-red-600">
                  (Caixa negativo. Verifique)
                </span>
              ) : null}
            </span>
          </div>

          {hasPMove && (
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Após</span>
              <span className="text-gray-900">
                {formatMoneyFromInt(balanceAfter)}
                {balanceAfter < 0 ? (
                  <span className="ml-2 text-red-600">
                    (Caixa ficará negativo. Verifique)
                  </span>
                ) : null}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
