import dynamic from "next/dynamic";
// @ts-ignore
const MfExample = dynamic(() => import("MfExample/MfExample"), {
  ssr: false,
});

const Page = () => {
  return (
    <MfExample />
  )
}

export default Page;
