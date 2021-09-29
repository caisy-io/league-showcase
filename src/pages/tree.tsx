import React from "react";
import { Tree } from "../../../league/src";
import { ITreeItem } from "../../../league/src/components/tree/Tree";
import treeExample from "../utils/treeExample.json";

const TreeShowcase = () => {
  const [treeData, setTreeData] = React.useState<ITreeItem[]>(treeExample);

  const onDrop = (newTreeData: ITreeItem[]) => {
    setTreeData(newTreeData);
  };

  return (
    <Tree
      onDrop={(newTreeData) => onDrop(newTreeData)}
      onClick={(id) => console.log(id)}
      rootId={0}
      treeData={treeData}
    />
  );
};

export default TreeShowcase;
