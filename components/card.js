import Image from 'next/image';

export default function Card({ data }) {
  const uuid = data.login.uuid;
  const splittedUuid = uuid.split('-');
  return (
    <div className="flex justify-center mx-2">
      <div className="block rounded-sm shadow-sm bg-white w-72 max-w-sm">
        <div className="flex flex-row border-b border-gray-300">
          <div className="py-3 pl-2 text-sm text-gray-500">Driver ID</div>&nbsp;
          <div className="py-3 text-sm text-red-600">{splittedUuid[0]}</div>
          <div className="container-fluid w-1/2 flex justify-end">
            <button
              type="button"
              className="absolute inline-block py-1 text-gray-800 font-bold text-lg"
            >
              ...
            </button>
          </div>
        </div>
        <div className="p-6">
          <Image
            src={data.picture.thumbnail}
            alt="avatar"
            width={60}
            height={60}
            className="rounded-full mb-2"
          ></Image>
          <div className="py-2">
            <div className="my-2 text-base">
              <div className="text-gray-500">Nama Driver</div>
              <div className="font-semibold">
                {data.name?.first}, {data.name?.last}
              </div>
            </div>
            <div className="my-2 text-base">
              <div className="text-gray-500">Telepon</div>
              <div className="font-semibold">{data.phone}</div>
            </div>
            <div className="my-2 text-base">
              <div className="text-gray-500">Email</div>
              <div className="font-semibold">{data.emal}</div>
            </div>
            <div className="my-2 text-base">
              <div className="text-gray-500">Tanggal Lahir</div>
              <div className="font-semibold">{data.dob?.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
