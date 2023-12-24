import MicrophoneComponent from "./views/VoiceRecorder";

export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center bg-gray-100 ">
			<MicrophoneComponent />
		</main>
	);
}
