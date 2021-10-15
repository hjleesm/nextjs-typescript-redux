import type { NextPage } from "next";
import { useState } from "react";
import { connect } from "react-redux";
import { setInfo } from "../redux/actions/main";
import { ReducerType } from "../redux/reducers/rootReducer";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props: any) => {
  const { name, setInfo } = props;
  const [newName, setName] = useState("");
  return (
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setInfo(newName)}>Submit</button>
    </div>
  );
};

const mapStateToProps = (state: ReducerType) => {
  return { name: state.main.name };
};

const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
