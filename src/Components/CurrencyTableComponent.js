import React, { Component } from "react";
import { Table } from "antd";
import { fetchAsset,fetchSymbol } from "../redux/Reducers/AssetReducer";
import { connect } from "react-redux";

export class CurrencyTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Asset: [],
      dataSource: [],
    };
  }

  componentDidMount() {
    fetchAsset();
  }

  render() {
    const columns = [
      {
        title: "Rank",
        dataIndex: "rank",
        key: "rank",
        sorter: (a, b) => a.rank > b.rank,
        sortDirections: ["descend"],
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Market Cap",
        dataIndex: "marketcap",
        key: "marketcap",
      },
      {
        title: "VWAP(24Hr)",
        dataIndex: "vwap",
        key: "vwap",
      },
      {
        title: "Supply",
        dataIndex: "supply",
        key: "supply",
      },
      {
        title: "Volume(24Hr)",
        dataIndex: "volume",
        key: "volume",
      },
      {
        title: "Change(24Hr)",
        dataIndex: "change",
        key: "change",
      },
    ];
    const data = this.props.Asset.Assets.data;
    const rowData=data?.map((e,key)=>{
       fetchSymbol(e.symbol)
      return (
        {
        rank:e.rank,
        name:e.name,
        price:e.priceUsd,
        marketcap:e.marketCapUsd,
        vwap:e.vwap24Hr,
        supply:e.supply,
        volume:e.volumeUsd24Hr,
        change:e.changePercent24Hr
        }
      )
    })
    return (
      <div>
        <Table columns={columns} pagination={{ pageSize: 20, total: 100 }}  dataSource={rowData}  />;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("I m here", state);
  return {
    Asset: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: dispatch(fetchAsset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyTableComponent);
