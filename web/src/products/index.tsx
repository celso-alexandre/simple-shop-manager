import { Skeleton } from 'antd';
import { Title } from '../components/title';
import { ProductsQuery, useProductsQuery } from '../graphql/__generated__/products.gql.generated';
import { SortOrder } from '../types';
import { ProductsTable } from './table';

export type ProductsNode = Omit<ProductsQuery['products']['nodes'][0], 'id'> & { id?: string };
export type ProductsFormNode = Pick<
  ProductsNode,
  'id' | 'name' | 'brandName' | 'priceValue' | 'isPostPaid' | 'costValue' | 'providerId'
>;
export function Products() {
  const { data, loading } = useProductsQuery({
    variables: {
      orderBy: { id: SortOrder.Desc },
    },
  });

  if (loading) return <Skeleton />;

  return (
    <>
      <Title title="Produtos" />

      <div style={{ padding: '0px 30px' }}>Filter here</div>

      <div style={{ padding: '0px 30px' }}>
        <ProductsTable dataSource={data?.products.nodes} />
      </div>
    </>
  );
}
