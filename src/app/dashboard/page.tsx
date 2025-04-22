// "use server";

// import { auth } from "~/server/auth";
// import { signout } from "../actions/auth";
// import { db } from "~/server/db";
// import UserMenu from "~/components/dashboard/UserMenu";
// import CreateRoom from "~/components/dashboard/CreateRoom";
// import RoomsView from "~/components/dashboard/RoomsView";

// export default async function Page() {
//   const session = await auth();

//   const user = await db.user.findUniqueOrThrow({
//     where: {
//       id: session?.user.id,
//     },
//     include: {
//       ownedRooms: true,
//       roomInvites: {
//         include: {
//           room: true,
//         },
//       },
//     },
//   });

//   return (
//     <div className="flex h-screen w-full">
//       <div className="flex h-screen min-w-[264px] flex-col border-r border-gray-200 bg-white p-2">
//         <UserMenu email={user.email} />
//       </div>
//       <div className="flex h-screen w-full flex-col">
//         <div className="flex min-h-[50px] items-center border-b border-gray-200 bg-white pl-8">
//           <h2 className="text-[13px]">Recents</h2>
//         </div>
//         <div className="flex h-full flex-col gap-10 p-8">
//           <CreateRoom />
//           <RoomsView
//             ownedRooms={user.ownedRooms}
//             roomInvites={user.roomInvites.map((x) => x.room)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// "use server";

// import { auth } from "~/server/auth";
// import { signout } from "../actions/auth";
// import { db } from "~/server/db";
// import UserMenu from "~/components/dashboard/UserMenu";
// import CreateRoom from "~/components/dashboard/CreateRoom";
// import RoomsView from "~/components/dashboard/RoomsView";

// export default async function Page() {
//   const session = await auth();

//   const user = await db.user.findUniqueOrThrow({
//     where: {
//       id: session?.user.id,
//     },
//     include: {
//       ownedRooms: true,
//       roomInvites: {
//         include: {
//           room: true,
//         },
//       },
//     },
//   });

//   return (
//     <div className="flex h-screen w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800">
//       {/* Sidebar */}
//       <div className="flex h-full min-w-[220px] flex-col border-r border-gray-200 bg-gradient-to-b from-white to-gray-100 p-3 shadow-sm">
//         <UserMenu email={user.email} />
//       </div>

//       {/* Main Content */}
//       <div className="flex h-full flex-1 flex-col">
//         {/* Top Header */}
//         <div className="flex h-12 items-center border-b border-gray-200 bg-gradient-to-r from-white via-gray-50 to-white pl-6 shadow-sm">
//           <h2 className="text-sm font-semibold tracking-wide text-gray-600">
//             Recents
//           </h2>
//         </div>

//         {/* Content Area */}
//         <div className="flex flex-col gap-6 overflow-auto p-6">
//           <CreateRoom />
//           <RoomsView
//             ownedRooms={user.ownedRooms}
//             roomInvites={user.roomInvites.map((x) => x.room)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { auth } from "~/server/auth";
// import { db } from "~/server/db";
// import UserMenu from "~/components/dashboard/UserMenu";
// import CreateRoom from "~/components/dashboard/CreateRoom";
// import RoomsView from "~/components/dashboard/RoomsView";
// import { Menu } from "lucide-react";

// export default async function Page() {
//   const session = await auth();

//   const user = await db.user.findUniqueOrThrow({
//     where: {
//       id: session?.user.id,
//     },
//     include: {
//       ownedRooms: true,
//       roomInvites: {
//         include: {
//           room: true,
//         },
//       },
//     },
//   });

//   return (
//     <div className="flex h-screen w-full flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800 md:flex-row-reverse">
//       {/* Sidebar for desktop */}
//       <div className="hidden h-full w-[220px] flex-col border-l border-gray-200 bg-gradient-to-b from-white to-gray-100 p-3 shadow-sm md:flex">
//         <UserMenu email={user.email} />
//       </div>

//       {/* Mobile Menu Button */}
//       <MobileSidebar email={user.email} />

//       {/* Main Content */}
//       <div className="flex h-full flex-1 flex-col">
//         {/* Top Header */}
//         <div className="flex h-12 items-center justify-between border-b border-gray-200 bg-gradient-to-r from-white via-gray-50 to-white px-4 shadow-sm">
//           <h2 className="text-sm font-semibold tracking-wide text-gray-600">
//             Recents
//           </h2>
//         </div>

//         {/* Content Area */}
//         <div className="flex flex-col gap-6 overflow-auto p-4 md:p-6">
//           <CreateRoom />
//           <RoomsView
//             ownedRooms={user.ownedRooms}
//             roomInvites={user.roomInvites.map((x) => x.room)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function MobileSidebar({ email }: { email: string }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Button */}
//       <div className="flex items-center justify-end border-b border-gray-200 bg-white px-4 py-2 md:hidden">
//         <button
//           onClick={() => setOpen(true)}
//           className="text-gray-600 hover:text-gray-800"
//         >
//           <Menu className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Drawer */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex">
//           <div
//             className="fixed inset-0 bg-black bg-opacity-30"
//             onClick={() => setOpen(false)}
//           />
//           <div className="ml-auto h-full w-64 bg-white p-4 shadow-lg">
//             <button
//               className="mb-4 text-sm text-blue-600 hover:underline"
//               onClick={() => setOpen(false)}
//             >
//               Close
//             </button>
//             <UserMenu email={email} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// This file stays a Server Component
"use server";

import { auth } from "~/server/auth";
import { db } from "~/server/db";
import UserMenu from "~/components/dashboard/UserMenu";
import CreateRoom from "~/components/dashboard/CreateRoom";
import RoomsView from "~/components/dashboard/RoomsView";
import MobileSidebar from "~/components/dashboard/MobileSidebar"; // now client

export default async function Page() {
  const session = await auth();

  const user = await db.user.findUniqueOrThrow({
    where: {
      id: session?.user.id,
    },
    include: {
      ownedRooms: true,
      roomInvites: {
        include: {
          room: true,
        },
      },
    },
  });

  return (
    <div className="flex h-screen w-full flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800 md:flex-row-reverse">
      {/* Right Sidebar (Desktop) */}
      <div className="hidden h-full w-[220px] flex-col border-l border-gray-200 bg-gradient-to-b from-white to-gray-100 p-3 shadow-sm md:flex">
        <UserMenu email={user.email} />
      </div>

      {/* Mobile Sidebar Toggle */}
      <MobileSidebar email={user.email} />

      {/* Main Content */}
      <div className="flex h-full flex-1 flex-col">
        <div className="flex h-12 items-center justify-between border-b border-gray-200 bg-gradient-to-r from-white via-gray-50 to-white px-4 shadow-sm">
          <h2 className="text-sm font-semibold tracking-wide text-gray-600">
            Recents
          </h2>
        </div>

        <div className="flex flex-col gap-6 overflow-auto p-4 md:p-6">
          <CreateRoom />
          <RoomsView
            ownedRooms={user.ownedRooms}
            roomInvites={user.roomInvites.map((x) => x.room)}
          />
        </div>
      </div>
    </div>
  );
}
