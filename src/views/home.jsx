import { useEffect, useState } from "react";

export default function Home() {

    const [suratMasuk, setSuratMasuk] = useState([]);

    const fetchDataSuratMasuk = async () => {
        //fetch data from API with Axios
        // await Api.get('/surat-masuk')
        await Api.get(`/surat-masuk?query=${query}`)
          .then((response) => {
            //assign response data to state "posts"
            setSuratMasuk(response.data.data);
          })
      };

      

      useEffect(() => {
        //call method "fetchDataPosts"
        fetchDataSuratMasuk();
      }, []);

    return (
        <>
            <div>
                <div>
                    home
                </div>
            </div>
        </>

    )
}