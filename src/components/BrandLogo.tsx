import Image from "next/image";

export function BrandLogo() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-24 h-24 mb-2 rounded-full overflow-hidden border-2 border-primary/50 bg-secondary flex items-center justify-center">
        <Image
          src="/tinghirtv.png"
          alt="Tinghir TV Logo"
          width={96}
          height={96}
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-2xl font-headline font-bold tracking-tighter text-white">
        TINGHIR <span className="text-primary">TV</span>
      </h1>
    </div>
  );
}
