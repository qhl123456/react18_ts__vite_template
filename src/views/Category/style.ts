import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  color: red;
  .product-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .item {
      color: ${(props) => props.color};
    }
  }
`
