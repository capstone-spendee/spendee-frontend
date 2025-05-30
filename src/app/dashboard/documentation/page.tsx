import FAQPage from "./FAQ/page";
import HowToUsePage from "./howToUse/page";

export default function Home() {
  return (
    <div className="">
      <HowToUsePage/>
      <FAQPage/>
    </div>
  );
}