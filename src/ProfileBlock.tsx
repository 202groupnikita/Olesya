import rose from "./images/rose.svg";

interface ProfileBlockProps {
  text: string;
  photo: string;
}

const ProfileBlock = ({ text, photo }: ProfileBlockProps) => {
    return (
        <div className='content'>
            <div className='text'>
                <p>{text}</p>
                <img src={rose} alt="rose" className='rose' />
            </div>
            <img src={photo} alt="" className='photo' />
        </div>
    )
};

export default ProfileBlock;
