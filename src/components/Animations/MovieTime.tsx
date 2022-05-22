import { LottieOptions, useLottie } from 'lottie-react';
import Animation from '../../assets/animations/45733-movie-time-animation.json'

const MovieTime = () => {

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

export default MovieTime