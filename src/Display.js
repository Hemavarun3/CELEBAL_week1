import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const Display = () => {
    const location = useLocation();
    const { state } = location;

    const data = {
        FirstName: state?.firstname || "",
        LastName: state?.lastname || "",
        userName: state?.username || "",
        Email: state?.email || "",
        Password: state?.password || "",
        PhoneNumber: state?.phonenum || "",
        Country: state?.country || "",
        City: state?.city || "",
        PanNumber: state?.pannum || "",
        AadharNumber: state?.aadharnum || ""
    };

    return (
        <>
            {state ? (
                <div className="flex flex-col items-center justify-center pt-24 w-full gap-y-12">
                    <div className="flex w-full">
                        <div className="flex flex-col justify-center items-end px-12 gap-y-4 w-1/2">
                            {Object.keys(data).slice(0, 5).map((key) => (
                                <div className="flex items-center gap-2" key={key}>
                                    <h1 className="font-bold">{`${key} :-`}</h1>
                                    <p>{data[key]}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-center px-12 gap-y-4 w-1/2">
                            {Object.keys(data).slice(5).map((key) => (
                                <div className="flex items-center gap-2" key={key}>
                                    <h1 className="font-bold">{`${key} :-`}</h1>
                                    <p>{data[key]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-red-500 text-xl">No data received</p>
            )}
        </>
    );
}

export default Display;
