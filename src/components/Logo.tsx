import Image from "next/image";
import logoLight from "../../public/assets/images/logo.svg";
import logoDark from "../../public/assets/images/logo-white.svg";

export default function Header({ isDark }: { isDark: boolean }) {
  return (
    <div>
      <Image
        src={isDark ? logoDark : logoLight}
        alt="Logo"
        width={150}
      />
    </div>
  );
}
