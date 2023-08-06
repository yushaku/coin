import { Radio } from "antd";

export const Setting = ({
  slippage,
  handleSlippageChange,
}: {
  slippage: any;
  handleSlippageChange: any;
}) => {
  return (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
};
