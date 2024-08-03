
import BannerImageComp from 'next/dist/client/components/baseimage';
import adBanners from 'C:/Users/user/Desktop/new-project/public/adBanners.json';

const HomePage = () => {
  return (
    <div className="home-page">
      {adBanners.map((adBanner: { id: any; }) => (
        <BannerImageComp key={adBanner.id} adBanner={adBanner} />
      ))}
    </div>
  );
};

export default HomePage;