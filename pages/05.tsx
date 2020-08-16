import React from 'react';

// {
//   "message": "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
//   "status": "success"
// }

type Data = {
  message: string;
  //   status: string;
};

const HelloFetchImage: React.FC = () => {
  // imageUrlの初期値は空文字
  const [imageUrl, setImageUrl] = React.useState('');

  // データ取得とステートの保持
  const fetchData = async () => {
    try {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const res = await fetch(url);
      const data: Data = await res.json();
      // 取得した画像のurlがsetImageUrlに入る
      setImageUrl(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // 副作用フック（マウント時）
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} />}
      <div>
        <button onClick={fetchData}>fetch</button>
        {/* clearボタンを押すとsetImageUrl(setState)によってimgUrlの値が変わり、空文字が入る */}
        <button onClick={() => setImageUrl('')}>clear</button>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div>
      <HelloFetchImage />
    </div>
  );
}
