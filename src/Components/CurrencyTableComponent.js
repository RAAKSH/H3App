import React, { Component } from "react";
import { Table } from "antd";
import { fetchAsset, fetchSymbol } from "../redux/Reducers/AssetReducer";
import { connect } from "react-redux";
import { Spin  } from  'antd';

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
    const precise = (x) => {
      return Number(x).toPrecision(3);
    };
    const data = this.props.Asset.Assets.data;
    let isLoading=false;
    if(data){
      isLoading=true;
    }else{
      isLoading=false;
    }
    const rowData = data?.map((e, key) => {
      //fetchSymbol(e.symbol)
      const pricePrecisioned = precise(e.priceUsd);
      const marketCapPrecisioned=precise(e.marketCapUsd);
      const vwap24HrPrecisioned=precise(e.volumeUsd24Hr);
      const supplyPrescisioned=precise(e.supply);
      const volumeUsd24HrPrescisioned=precise(e.volumeUsd24Hr);
      const changeParcentPrescisioned=precise(e.changePercent24Hr);
      return {
        id:key,
        rank: e.rank,
        name: e.name,
        price: pricePrecisioned,
        marketcap: marketCapPrecisioned,
        vwap: vwap24HrPrecisioned,
        supply: supplyPrescisioned,
        volume: volumeUsd24HrPrescisioned,
        change: changeParcentPrescisioned,
      };
    });
    return (
      <div>{isLoading?(<Table
        columns={columns}
        pagination={{ pageSize: 20, total: 100 }}
        dataSource={rowData}
      />):<Spin />}
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
