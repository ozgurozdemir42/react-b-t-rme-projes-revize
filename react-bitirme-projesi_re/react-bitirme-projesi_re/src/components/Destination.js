
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popüler Tesisler</h1>
      <p>Sosyal Tesisler Sizleri Daha Modern Bir Birey Yapar</p>
      <DestinationData
        className="first-des"
        heading="Yeniyol Kafe Meram Trafik Parkı"
        text="Meram ilçesinde bulunan Kafe Meram Yeniyol Trafik Parkının adresi Konevi Mahallesi Alay Caddesi No:4, 42040 Meram/Konya. Kafe Meram'ın telefon numarası 444 5 233. Kafe Meram, Türk ve çağdaş mutfaklarından örnekler sunan bir restoran olarak hizmet vermektedir . Kafe Meram'ın açılış saatleri haftanın her günü 09:00 - 23:00 arasındadır ."
        img1={"https://www.meram.bel.tr/upload/medya/HE5B9325.jpg"}
        img2={"https://www.meram.bel.tr/upload/medya/20201006_131028.jpg"}
       />
       <DestinationData
        className="first-des first-des-rev"
        heading="Berlika Kafe Meram"
        text="Meram Belediyesi Berlika Parkı içerisinde yer alan Kafe Meram Berlika, çocuklara hitap eden bir kafedir. Akülü araçlar ve çocuklar için eşsiz lezzetler sunan kafede, ayrıca trafik eğitim parkı da bulunmaktadır 12. Kafe Meram’ın telefon numarası 444 5 233 1."
        img1={"https://www.meram.bel.tr/upload/medya/MRM_5808.jpg"}
        img2={"https://www.meram.bel.tr/upload/medya/MRM_5820.jpg"}
       />
    </div>
  );
};

export default Destination;
