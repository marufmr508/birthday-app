 import Image from "next/image";

export type Birthday = {
  id: number;
  image: string;
  message: string;
  description: string;
};

const BirthdayCard = ({ birthday }: { birthday: Birthday }) => {
  return (
    <div className="container m-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
      
      <div className="relative h-80 w-full">
        <Image
          src={birthday.image}
          alt={birthday.message}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold">
          {birthday.message}
        </h2>

        <p className="text-gray-600">
          {birthday.description}
        </p>
      </div>

    </div>
  );
};

export default BirthdayCard;