import React, { useRef } from 'react'
import {motion}  from "framer-motion"

function ImageAnimation() {

const images = [
    "https://www.shutterstock.com/image-photo/cute-dog-on-isolated-background-600nw-2468489845.jpg",
    "https://media.istockphoto.com/id/1503385646/photo/portrait-funny-and-happy-shiba-inu-puppy-dog-peeking-out-from-behind-a-blue-banner-isolated.jpg?s=612x612&w=0&k=20&c=xZq8PhunL9ZmY243et3GOf04wJPBmHzeiQ3jw7nWCrY=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0uFBKfyUA5TDZpQLQrKO2cgyxxHPrvY_UrozBqktd1r3IRzzqveVPlCwPkv1hYZaB0c&usqp=CAU-url-3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkMJ2Pvc_apW4kRzu7UJ3iP4A_GvSYap2jOpDMkndBnYmCXa8kKP0os_XvRv4FSNqcz4&usqp=CAU",
    
  ];

  const images2=["https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"]
  const carouselRef = useRef(null);




  return (
<>
 <div className="overflow-hidden w-200 flex justify-center items-center">
      <motion.div
        ref={carouselRef}
        className="flex gap-3 "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="min-w-[100px] min-h-[100px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`image-${index}`}
              className="w-50 h-50 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>

    <div className="overflow-hidden w-200 flex justify-center items-center">
      <motion.div
        ref={carouselRef}
        className="flex gap-3 "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images2.map((src, index) => (
          <motion.div
            key={index}
            className="min-w-[100px] min-h-[100px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`image-${index}`}
              className="w-50 h-50 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>

   


</>





)
}

export default ImageAnimation