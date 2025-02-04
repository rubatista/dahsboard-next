const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Annoucements</h1>
            <span className="text-xs text-gray-400">View all</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-rubbSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem isupm dolor.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                        01-10-2025
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit amet consectetur.</p>
            </div>
            <div className="bg-rubbPurpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem isupm dolor.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                        01-10-2025
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit amet consectetur.</p>
            </div>
            <div className="bg-rubbYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem isupm dolor.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                        01-10-2025
                    </span>
                </div>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit amet consectetur.</p>
        </div>
    </div>
  )
}

export default Announcements