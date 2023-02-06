import BlockUI1 from "./BlockUI1/BlockUI1"
/* import Blockui2 from "./BlockUI2/BlockUI2"; */

const Session02: React.FC = () => {
    return (
        <>
      <BlockUI1 title={"Banwidth"} bgTitle="red" percent={20} bgProcess="orange" />
      <BlockUI1 title={"Storage"} bgTitle="cyan" percent={50} bgProcess="orange" />
      <BlockUI1 title={"Users"} bgTitle="green" percent={70} bgProcess="orange" />
      <BlockUI1 title={"Visitors"} bgTitle="yellow"  percent={30} bgProcess="orange" />
      <BlockUI1 title={"Emails"} bgTitle="purple" percent={45} bgProcess="orange" />
      <BlockUI1 title={"Basic"} bgTitle="magenta" percent={80} bgProcess="orange" />
      <BlockUI1 title={"Others"} bgTitle="blue" percent={37} bgProcess="orange" />

    </>
    );
};
export default Session02;