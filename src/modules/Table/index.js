// @flow

import styled from "styled-components";
import * as Fonts from "../fonts";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: none;
  box-sizing: border-box;
  width: 100%;

  thead {
    display: table-header-group;
    background-color: #f5f5f7;
    box-sizing: border-box;
    vertical-align: middle;
    width: 100%;
  }

  th {
    box-sizing: border-box;
    border-left: 1px solid #f5f5f7;
    color: #303030;
    font-size: 1rem;
    font-weight: 100;
    height: 3rem;
    letter-spacing: 0.0125rem;
    padding: 0 1rem;
    text-align: left;
    text-transform: capitalize;
    ${Fonts};
  }

  tbody {
    box-sizing: border-box;

    tr {
      box-sizing: border-box;
      border-right: 1px solid #f5f5f7;
    }

    tr:nth-child(even) {
      background-color: #fafafa;
    }

    tr:last-child {
      border-bottom: 1px solid #e6e6ed;
    }

    tr:hover {
      background-color: #f7f6ff;
      cursor: pointer;
    }
  }

  td {
    border-left: 1px solid #f5f5f7;
    position: relative;
  }

  td,
  p {
    box-sizing: border-box;
    font-size: 0.9rem;
    letter-spacing: 0.04rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    text-transform: capitalize;
    ${Fonts};
  }
`;

export default Table;
