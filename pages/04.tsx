import React from 'react';
import Link from 'next/link';

const HelloCounter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  // 副作用フック（マウント時）ページを表示・非表示された瞬間に何か実行させたい時
  React.useEffect(() => {
    alert('mounted');
    // 副作用フック（アンマウント時）
    return () => alert('cleanup');
  }, []);

  // 副作用フック（依存の変更時）カウントの値が変わった時に実行される
  React.useEffect(() => {
    alert('counted');
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>
        <Link href="/">
          <a>back</a>
        </Link>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div>
      <HelloCounter />
    </div>
  );
}
