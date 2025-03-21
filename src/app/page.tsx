"use client";
import { SrirachaNav } from "@/components/nav";
import Image from "next/image";
import briefcase from "../../public/assets/briefcase.svg";
import takeout from "../../public/assets/takeout.svg";
import github from "../../public/assets/github.svg";
import linkedin from "../../public/assets/linkedin.svg";
import voiceAgent from "../../public/assets/VoiceAgent.svg";
import pencil from "../../public/assets/pencil.svg";
import phone from "../../public/assets/phone.svg";
import { Cheesin } from "@/components/cheesin";
import { Mission } from "@/components/mission";
import { ProficienciesList } from "@/components/proficiencies";
import { WritingPieces } from "@/components/writing";
import { Identities } from "@/components/identities";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { PopupModal } from "@/components/popupModal";
import { useCallback, useEffect, useState } from "react";
import { EmailInput } from "@/components/emailInput";
import { WorkSample } from "@/contexts/interfaces";
import { PopupToast } from "@/components/toast";

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [actions, setActions] = useState<WorkSample[]>([]);
  const [resolveModal, setResolveModal] = useState<
    ((value: string | null) => void) | null
  >(null);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [isInfoToastOpen, setIsInfoToastOpen] = useState<boolean>(false);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    console.log("closed without email");
    if (resolveModal) {
      resolveModal(null);
    }
  }, [resolveModal]);

  // async function addRow(email: string, actions: WorkSample[]) {
  //   try {
  //     const response = await fetch('/api/contact-request', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, samplesRequested: actions }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to add row');
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     console.error('Error adding row:', error);
  //     return null;
  //   }
  // }

  // const handleEmailSubmit = useCallback(
  //   async (submittedEmail: string) => {
  //     try {
  //       const result = await addRow(submittedEmail, actions);
  //       if (result && result.success) {
  //         setIsSubmitSuccessful(true);
  //         console.log("Form submitted with email:", submittedEmail);
  //         setEmail(submittedEmail);

  //         setTimeout(() => {
  //           setModalOpen(false);
  //         }, 2000);
  //         if (resolveModal) {
  //           resolveModal(submittedEmail);
  //         }
  //       } else {
  //         throw new Error('Failed to add row');
  //       }
  //     } catch (error) {
  //       console.error('Error submitting email:', error);
  //       // Handle error (e.g., show error message to user)
  //     }
  //   },
  //   [resolveModal, actions]
  // );

  // const openEmailModal = useCallback((): Promise<string | null> | undefined => {
  //   if (!email) {
  //     return new Promise((resolve) => {
  //       setResolveModal(() => resolve);
  //       setModalOpen(true);
  //     });
  //   } else {
  //     setIsInfoToastOpen(true);
  //   }
  // }, [email, setResolveModal, setModalOpen]);

  // function handleInfoToastClose() {
  //   setIsInfoToastOpen(false);
  // }

  return (
    <div className="h-full">
      {/* <PopupModal isOpen={modalOpen} onClose={() => handleModalClose()}>
        <div className="flex flex-col my-4">
          <p className="text-lg font-semibold">
            I&apos;ll keep it real simple partner...
          </p>
          <p>
            Fork over the email and I&apos;ll be in touch quicker than a cowboy
            with a six shooter 🔫 🤠
          </p>
          <div className="mt-4">
            <EmailInput
              email={email}
              handleEmailSubmit={handleEmailSubmit}
              isSubmitSuccessful={isSubmitSuccessful}
            />
          </div>
        </div>
      </PopupModal>
      <PopupToast
        type="info"
        isOpen={isInfoToastOpen}
        onClose={handleInfoToastClose}
      >
        <div className="flex gap-4">
          <p>
            I&apos;ve got your email on file and will reach out soon. Feel free
            to browse my experience and request any work samples you are
            interested in!
          </p>
          <div onClick={() => handleInfoToastClose()}>
            <h2>X</h2>
          </div>
        </div>
      </PopupToast> */}
      <SrirachaNav />
      <main className="flex min-h-screen flex-col items-center justify-between bg-background">
        <div className="w-full p-6 gap-8 flex flex-col max-w-3xl">
          <div className="flex flex-col gap-4">
            <Cheesin />
            <div className="flex flex-col gap-6 align-middle py-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-center text-3xl">I Solve Problems</h2>
                <h2 className="text-center text-3xl">and Cook Good Food</h2>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="border-2 border-redSriracha rounded-md w-full  p-1.5">
                    <Link
                      href="#workExperience"
                      className="flex gap-2 justify-center"
                    >
                      <Image src={briefcase} alt="briefcase" />
                      <p className="text-redSriracha font-semibold">
                        View Experience
                        {/* TODO: insert a virtual tool that developers can use as a library for frontend */}
                      </p>
                    </Link>
                  </div>
                  <a
                    href="mailto:david.m.botos@gmail.com"
                    className="w-full flex"
                    target="_blank"
                  >
                    <div className="border-2 border-redSriracha rounded-md gap-2 p-1.5 justify-center w-full flex">
                      <Image src={takeout} alt="briefcase" />
                      <p className="text-redSriracha font-semibold">
                        Let&apos;s Cook!
                      </p>
                    </div>
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/David-Botos"
                    className="w-full flex"
                    target="_blank"
                  >
                    <div className="border-2 border-redSriracha rounded-md gap-2 p-1.5 justify-center w-full flex">
                      <Image src={github} alt="briefcase" />
                      <p className="text-redSriracha font-semibold">GitHub</p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/david-botos/"
                    className="w-full flex"
                    target="_blank"
                  >
                    <div className="border-2 border-redSriracha rounded-md gap-2 p-1.5 justify-center w-full flex">
                      <Image src={linkedin} alt="briefcase" />
                      <p className="text-redSriracha font-semibold">LinkedIn</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full justify-center">
            <div className="bg-brownSriracha w-1 h-1 rounded-full"></div>
            <div className="bg-brownSriracha w-1 h-1 rounded-full"></div>
            <div className="bg-brownSriracha w-1 h-1 rounded-full"></div>
          </div>
          <div className="w-full flex flex-col gap-7">
            <div>
              <p>My name is...</p>
              <div className="flex gap-2 items-center">
                <h2 className="text-4xl">~ David Botos</h2>
              </div>
            </div>
            <Identities />
            <Mission />
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex gap-5 items-center justify-between">
                <h1 className="text-2xl">Want to try out a project?</h1>
                <p className="italic">Password: ILoveHotSauce!</p>
              </div>
              <div className="border-2 border-redSriracha rounded-md w-full  p-1.5">
                <Link
                  href="https://voiceagent.davidbotos.com"
                  className="flex gap-2 justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-row gap-0">
                    <Image src={phone} alt="phone" />
                    <Image src={voiceAgent} alt="robot" />
                    <Image src={pencil} alt="pencil" />
                  </div>
                  <p className="text-redSriracha font-semibold">
                    BearHug Voice Agent
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div
            id="workExperience"
            style={{ marginTop: "-40px", height: 40 }}
          ></div>
          <div>
            <ProficienciesList
              actions={actions}
              setActions={setActions}
              email={email}
            />
          </div>
          {/* <div>
            <WritingPieces />
          </div> */}
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
