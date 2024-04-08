import { useContext } from 'react'
import MainContext from '../MainContext';
import { GrLink, GrDownload, GrClose } from 'react-icons/gr';

function Download() {

    const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext)

    const getLink = () => {
        prompt("Here is your link to share", `http//localhost:3000/collection${selectedBrands.join(",")}`)
    }

    return (
        <div className="download">
            <div className="actions">
                <a>
                    <GrDownload />
                </a>
                <button onClick={getLink}>
                    <GrLink />
                </button>
            </div>
            <div className="selected" onClick={() => setSelectedBrands([])}>
                <GrClose />
                {selectedBrands.length} brands collected
            </div>
        </div>
    )
}

export default Download