import "./TripStyles.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1 style={{marginTop:"80px"}}>Diğer Tesisler</h1>
      <p style={{fontSize:"20px",fontWeight:"300",marginBottom:"70px"}}>Diğer Tesislerimizi Keşfedebilirsiniz</p>
      <div className="tripcard">
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/DJI_0008_2.jpg"}
            heading="Tenzile Ana Hasta Konuk Evii"
            text="Tenzile Ana Hasta Konuk Evi, Konya’nın Meram ilçesinde yer alan bir konukevi ve sosyal tesistir 1. Bu tesis, hasta ve hasta yakınları için inşa edilmiş 5 yıldızlı otel konforunda hizmet vermektedir 23. Tenzile Ana Hasta Konuk Evi, 81 binden fazla misafirini ağırlamıştır 3. Konuk evi, Meram İlçe Belediyesi tarafından sağlık çalışanlarına tahsis edilmiştir 4."
         />
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/499A0801.jpg"}
            heading="Fahrünnisa Kültür Merkezi"
            text="Bünyesinde Millet Kıraathanesi ile Emekliler Lokali'nin yer aldığı Gazze Sosyal Tesisi ve Eyyüb-el Ensari Camii düzenlenen törenle hizmete açıldı. Meram Belediye Başkanı Mustafa Kavuş, Meram için değer üretmeye, sosyal ve kültürel alanlarda hayat standardını yükseltecek yatırımlar yapmaya devam ettiklerini belirterek “Gencinden yaşlısına, kadınından erkeğine, engellisinden yardıma muhtaç her kim varsa onlar için  tüm Türkiye’de parmakla gösterilen projeler ürettiklerini ve eserler ortaya koyduklarını kaydetti."
         />
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/HE5B9527.jpg"}
            heading="Aşkan Muhammed Yürükuslu Spor Tesisi"
            text=" Tesisimiz, üyelerine haftanın 6 günü 08:00 - 22:30 saatleri arasında hizmet vermektedir.

            Pazartesi günleri temizlik ve tadilat nedeniyle kapalı olup sadece 08:00 – 17:00 saatleri arasında kayıt işlemlerine açıktır.
            
            Aşkan Muhammet Yürükuslu Spor Merkezi’nde, 1 açık 2 kapalı olmak üzere 3 adet tenis kortu, 7 kulvarlı okçuluk alanı, bay ve bayanlara hizmet veren spining stüdyosu, bay bayan için ayrı fitness salonları, bayan step aerobik-plates-zumba, aletli plates (reformer), taekwondo, boks ve cimnastik salonları bulunmaktadır.
            
            Bünyesinde wc, duş, mescit ve dinlenme salonu imkanları da bulunan tesisimiz üyelik sistemiyle hizmet vermektedir."
         />
       </div>
    </div>
  );
}

export default Trip;
