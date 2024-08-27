export const getStaticProps = () => {
  return {
    props: {
      hi: "hi",
    },
  };
};

export default function Page({ hi }: any) {
  const onClick = () => {
    console.log("HI");
  };

  return (
    <div>
      <button onClick={onClick}>{hi}</button>
    </div>
  );
}
