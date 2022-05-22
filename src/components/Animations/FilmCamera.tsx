import { LottieOptions, useLottie } from 'lottie-react';
import Animation from '../../assets/animations/53731-video-camera.json';

const FilmCamera = () => {

    const Options: LottieOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        height: '20px',
        width: '20px',
    }

    const { View } = useLottie(Options);

    return (
        <>
            {View}
        </>
    )
}

export default FilmCamera