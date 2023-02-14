import BlockUI1 from "./commonBL1"
/* import Blockui2 from "./BlockUI2/BlockUI2"; */

const BlockUl1: React.FC = () => {
    return (
        <>
      <BlockUI1 title={"Banwidth"} bgTitle="#e54d4c" percent={20} bgProcess="#f75354" />
      <BlockUI1 title={"Storage"} bgTitle="#2db8cd" percent={50} bgProcess="#31c8dd" />
      <BlockUI1 title={"Users"} bgTitle="#4ac25e" percent={70} bgProcess="#51d567" />
      <BlockUI1 title={"Visitors"} bgTitle="#e9c318"  percent={30} bgProcess="#fcd518" />
      <BlockUI1 title={"Emails"} bgTitle="#bb70d5" percent={45} bgProcess="#cb79e7" />
      <BlockUI1 title={"Basic"} bgTitle="#eb59d6" percent={80} bgProcess="#fe60e8" />
      <BlockUI1 title={"Others"} bgTitle="#5890da" percent={37} bgProcess="#619bec" />

    </>
    );
};
export default BlockUl1;