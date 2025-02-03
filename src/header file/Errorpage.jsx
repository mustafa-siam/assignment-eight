const Errorpage = () => {
    return (
        <div className="h-screen text-center flex justify-center items-center ">
            <div className="bg-[#13131308] p-4">
                <h1 className="text-4xl font-bold py-6">404 : Not found page</h1>
                <p>This site can not be reached.localhost refused to connect.</p>
              <p>Try other way: <br />
Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED</p>
            </div>
        </div>
    );
};

export default Errorpage;