"use client";
import { SrirachaNav } from "@/components/nav";
import Image from "next/image";
import briefcase from "../../public/assets/briefcase.svg";
import takeout from "../../public/assets/takeout.svg";
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

  useEffect(() => {
    console.log("Updated email:", email);
  }, [email]);

  const handleEmailSubmit = useCallback(
    (submittedEmail: string) => {
      // TODO: send email to server and only if its successful trigger the following two lines to set the perm email and trigger success dialogue
      setIsSubmitSuccessful(true);
      console.log("Form submitted with email:", submittedEmail);
      setEmail(submittedEmail);

      setTimeout(() => {
        setModalOpen(false);
      }, 2000);
      if (resolveModal) {
        resolveModal(submittedEmail);
      }
    },
    [resolveModal]
  );

  const openEmailModal = useCallback((): Promise<string | null> | undefined => {
    if (!email) {
      return new Promise((resolve) => {
        setResolveModal(() => resolve);
        setModalOpen(true);
      });
    } else {
      setIsInfoToastOpen(true);
    }
  }, [email, setResolveModal, setModalOpen]);

  function handleInfoToastClose() {
    setIsInfoToastOpen(false);
  }

  return (
    <div className="h-full">
      <PopupModal isOpen={modalOpen} onClose={() => handleModalClose()}>
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
      </PopupToast>
      <SrirachaNav />
      <main className="flex min-h-screen flex-col items-center justify-between bg-background">
        <div className="w-full p-6 gap-8 flex flex-col">
          <div className="flex flex-col gap-4">
            <Cheesin />
            <div className="flex flex-col gap-6 align-middle py-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-center text-3xl">I Solve Problems</h2>
                <h2 className="text-center text-3xl">and Cook Good Food</h2>
              </div>
              <div className="flex gap-4">
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
                <div
                  className="border-2 border-redSriracha rounded-md w-full flex gap-2 p-1.5 justify-center"
                  onClick={() => openEmailModal()}
                >
                  <Image src={takeout} alt="briefcase" />
                  <p className="text-redSriracha font-semibold">
                    Let&apos;s Cook!
                  </p>
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
          </div>
          <div
            id="workExperience"
            style={{ marginTop: "-40px", height: 40 }}
          ></div>
          <div>
            <ProficienciesList
              actions={actions}
              setActions={setActions}
              openEmailModal={openEmailModal}
              email={email}
            />
          </div>
          <div>
            <WritingPieces />
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
