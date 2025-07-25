import LogoLarge from "../../assets/logoLarge.svg?react";
import ContentVerticalPadding from "../../layout/ContentVerticalPadding";

function LogoDefinitionPage() {
  return <ContentVerticalPadding>
    <div className="flex flex-col w-fit mx-auto">
      <h3 className="font-bold text-2xl">DEFINISI LOGO</h3>
      <div className="flex flex-col gap-15 items-center">
        <div className="bg-[#081423] p-15 rounded-full shadow-lg [clip-path:ellipse(50%_50%_at_50%_50%)]">
          <LogoLarge className="" />
        </div>
        <div
          className="border-1 border-black rounded-2xl p-8"
          style={{
            boxShadow:
              "0 -4px 6px -1px rgba(0,0,0,0.4), 0 4px 6px -1px rgba(0,0,0,0.4)",
          }}
        >
          <h3 className="mb-2 font-bold text-2xl">Perisai</h3>
          <p className=" w-[90ch] text-justify">
            Simbol perisai melambangkan perlindungan dan keamanan. Ini
            mencerminkan peran utama CSIRT Universitas Lampung sebagai garda
            terdepan dalam melindungi sistem informasi dan data digital
            universitas dari berbagai ancaman siber
          </p>
          <h3 className="mt-8 mb-2 font-bold text-2xl">
            Simbol Sirkuit dan Kunci
          </h3>
          <div className="w-[90ch] text-justify">
            <ul className="list-disc list-outside mx-[18px]">
              <li>
                Sirkuit: Mewakili konektivitas dan teknologi, menunjukkan
                bahwa CSIRT UNILA berperan dalam menjaga keamanan sistem
                yang saling terhubung.
              </li>
              <li>
                Kunci: Melambangkan perlindungan dan privasi data,
                mencerminkan komitmen dalam menjaga kerahasiaan dan
                integritas informasi
              </li>
            </ul>
          </div>
          <h3 className="mt-8 mb-2 font-bold text-2xl">Warna Hijau</h3>
          <p className=" w-[90ch] text-justify">
            Melambangkan pertumbuhan, ketahanan, dan harapan. Warna ini
            merepresentasikan komitmen CSIRT UNILA untuk terus berkembang
            dan beradaptasi dalam menjaga keamanan siber.
          </p>
          <h3 className="mt-8 mb-2 font-bold text-2xl">
            Teks "CSIRT UNILA" dan "Computer Security Incident Team"
          </h3>
          <p className=" w-[90ch] text-justify">
            Menegaskan identitas dan fungsi utama tim dalam pengelolaan dan
            penanganan insiden keamanan siber di lingkungan Universitas
            Lampung.
          </p>
          <h3 className="mt-8 mb-2  font-bold text-2xl">
            Garis dan Titik di Bagian Bawah
          </h3>
          <p className="w-[90ch] text-justify">
            Melambangkan jaringan dan konektivitas digital yang kompleks.
            Garis dan titik ini merepresentasikan bagaimana CSIRT UNILA
            menghubungkan berbagai sistem dan memastikan bahwa setiap bagian
            dari jaringan teknologi universitas tetap aman dan terlindungi
            dari ancaman.
          </p>
        </div>
      </div>
    </div>
  </ContentVerticalPadding>;
}

export default LogoDefinitionPage;
