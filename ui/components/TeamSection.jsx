import { AnimatePresence } from "framer-motion";
import React from "react";
import LetterCircle from "./LetterCircle";
import { motion } from "framer-motion";
function TeamSection({ teamRef }) {
  const [details, setDetails] = React.useState(
    <AnimatePresence>
      <motion.span exit={{ opacity: 0 }} className="text-[17px] lg:text-[20px]">
        Scroll over your cursor on later to see the magic!
      </motion.span>
    </AnimatePresence>
  );

  return (
    <div className="min-h-[50vh] pt-20 pb-20" ref={teamRef} id="#team">
      <div className="flex items-center justify-center my-auto">
        <div className="flex items-center flex-wrap w-[80%] mx-auto justify-between mt-auto">
          <div className=" max-w-lg transition-all duration-500">
            <p className="text-[25px] lg:w-[400px]">{details}</p>
          </div>
          <div className="flex justify-center flex-wrap max-w-xl mt-10">
          
            <LetterCircle
              // image={"/team/festus.jpg"}
              letter="P"
              color={"#0FE76A"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-1xl font-[400]">
                          Peace Bello
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Energy Innovator (Team Lead)
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Peace Bello
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Energy Innovator (Team Lead)
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
            //  image={"/team/jess.png"}
              letter="V"
              color={"#FEF025"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Victor Olufemi
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Hardware Engineer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Victor Olufemi
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Hardware Engineer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
            //  image={"/team/image.jpg"}
              letter="B"
              color={"#029CFF"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Boluwatife Jemiriye
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          UI/UX designer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Boluwatife Jemiriye
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          UI/UX designer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
              // image={"/team/image.jpg"}
              letter="G"
              color={"#FEF025"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Grace Omojola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Data scientist
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Grace Omojola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Data scientist
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
              // image={"/team/festus.jpg"}
              letter="I"
              color={"#029CFF"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Iyanuoluwa Adebayo
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Software developer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                     <span>
                        <span className="text-2xl font-[400]">
                          Iyanuoluwa Adebayo
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Software developer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
            <LetterCircle
              // image={"/team/jess.png"}
              letter="O"
              color={"#0FE76A"}
              hover={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.4, type: "spring" }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Oreoluwa Akinola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Blockchain developer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
              hoverOut={() =>
                setDetails(
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>
                        <span className="text-2xl font-[400]">
                          Oreoluwa Akinola
                        </span>
                        <br />
                        <span className="text-lg font-[400]">
                          Blockchain developer
                        </span>
                      </span>
                    </motion.span>
                  </AnimatePresence>
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
