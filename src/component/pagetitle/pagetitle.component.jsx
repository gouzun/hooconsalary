import HCLOGO from '../../assets/72x72.png';
const PageTitle = ({ titleObject }) => {

    const { titlename } = titleObject;

    return (
        <div>
            <div className="flex flex-wrap justify-center h-30 w-30"><img src={HCLOGO} alt='' /></div>
            <div className="flex flex-wrap justify-center h-30 w-30"><h3>{titlename}</h3></div>
        </div>)
}

export default PageTitle;