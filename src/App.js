import styled from 'styled-components';
import React, { useState, useRef, useCallback } from 'react';
import defaultMemo from './defaultMemo';
import Popup from './components/Popup';
import Header from './components/Header';
import Bar from './components/bar/Bar';
import List from './components/list/List';
import Footer from './components/Footer';

export default function App() {
  const [memos, setMemos] = useState(defaultMemo);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const memo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setMemos(memos.concat(memo));
      nextId.current += 1;
    },
    [memos],
  );

  const onRemove = useCallback(
    (id) => {
      setMemos(memos.filter((memo) => memo.id !== id));
    },
    [memos],
  );

  const onToggle = useCallback(
    (id) => {
      setMemos(
        memos.map((memo) =>
          memo.id === id ? { ...memo, checked: !memo.checked } : memo,
        ),
      );
    },
    [memos],
  );

  const onEdit = useCallback(
    (id, text) => {
      setMemos(
        memos.map((memo) => (memo.id === id ? { ...memo, text: text } : memo)),
      );
    },
    [memos],
  );

  const [popup, setPopup] = useState(false);
  const onPopup = () => {
    setPopup(true);
  };

  const [padding, setPadding] = useState(135);
  const onExpand = (value) => {
    setPadding(value);
  };

  // search
  const [search, setSearch] = useState(false);
  const onSearch = () => {
    if (search) setSearch(false);
    else setSearch(true);
  };

  const [keyword, setKeyword] = useState('');
  const onKeyword = (value) => {
    setKeyword(value);
  };

  return (
    <Body search={search}>
      {popup && <Popup onClose={() => setPopup(false)} />}
      <Top search={search}>
        <Wrap>
          <Header search={search} onSearch={onSearch} />
          <Bar
            search={search}
            onInsert={onInsert}
            onPopup={onPopup}
            onExpand={onExpand}
            onKeyword={onKeyword}
          />
        </Wrap>
      </Top>
      <Main padding={padding}>
        <List
          search={search}
          memos={memos}
          keyword={keyword}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onPopup={onPopup}
        />
      </Main>
      <Footer />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  background-color: ${({ search }) => (search ? '#F2F2F2' : '')};
  transition: all 0.2s ease-out;

  textarea {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: rgba(128, 128, 128, 0.7);
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  }
`;

const Top = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ search }) => (search ? '#F2F2F2' : 'white')};

  width: 100%;
  box-shadow: 0 0 6px lightgrey;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
  padding-bottom: 10px;
`;

const Main = styled.main`
  padding-top: ${(props) => props.padding + 'px'};
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;
