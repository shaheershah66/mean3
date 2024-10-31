import { useState } from "react";
import "./index.css"

export default function Form(){
    const neededServicesF = ["Ecommerce Website", "ERP Solutions", "SEO", "PR Marketing"];
    const budgetF = ["Select Options", "Under $1000", "Between $1000 - $3000", "Between $3000 - $10000", "Over $10000"]
    const intialFormValues = {
        name: "",
        company: "",
        email: "",
        phone: "",
        neededService: neededServicesF[0],
        budget: budgetF[0],
        message: ""
    }
    const [form, setForm] = useState(intialFormValues);

    function handleForm(e){
        e.preventDefault();
        console.log(form);
        setForm(intialFormValues);
    }
    
    return(
        <form action="#" method="get" onSubmit={handleForm} className="flex flex-wrap w-full">
            <div className="w-full md:w-[50%] relative px-[15px]">
                <input id="name" type="text" value={form.name} onChange={(e) => setForm({...form, name:e.target.value})} className="relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[10px] pb-[6px] bg-white"></input>
                <label htmlFor="name" className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] uppercase text-[10px] text-[#969696] cursor-text">Name</label>
            </div>

            <div className="w-full md:w-[50%] relative px-[15px]">
                <input id="company" type="text" value={form.company} onChange={(e) => setForm({...form, company:e.target.value})} className="relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[10px] pb-[6px] bg-white"></input>
                <label htmlFor="company" className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] uppercase text-[10px] text-[#969696] cursor-text">Company</label>
            </div>

            <div className="w-full md:w-[50%] relative px-[15px]">
                <input id="email" type="email" value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} className="relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[10px] pb-[6px] bg-white"></input>
                <label htmlFor="email" className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] uppercase text-[10px] text-[#969696] cursor-text">Email</label>
            </div>

            <div className="w-full md:w-[50%] relative px-[15px]">
                <input id="phone" type="text" value={form.phone} onChange={(e) => setForm({...form, phone:e.target.value})} className="relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[10px] pb-[6px] bg-white"></input>
                <label htmlFor="phone" className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] uppercase text-[10px] text-[#969696] cursor-text">Phone</label>
            </div>

            <div className="w-full md:w-[50%] relative px-[15px]">
                <label className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] z-10 uppercase text-[10px] text-[#969696] cursor-text">Needed Services</label>
                <select id="needed-services" value={form.neededService} onChange={(e) => setForm({...form, neededService:e.target.value})} className="appearance-none relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[9px] pb-[6px] bg-white">
                    {
                        neededServicesF.map((item) => {
                            const changeValue = item.toLowerCase().replace(" ", "-")
                            return(
                                <option value={changeValue}>{item}</option>
                            )
                        })
                    }
                </select>
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="absolute top-[22px] right-6"
                    >
                    <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8zM7.646.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 1.707V5.5a.5.5 0 01-1 0V1.707L6.354 2.854a.5.5 0 11-.708-.708l2-2zM8 10a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L7.5 14.293V10.5A.5.5 0 018 10z"
                    />
                </svg>
            </div>

            <div className="w-full md:w-[50%] relative px-[15px]">
                <label className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] z-10 uppercase text-[10px] text-[#969696] cursor-text">Budget</label>
                <select id="budget" value={form.budget} onChange={(e) => setForm({...form, budget:e.target.value})} className="appearance-none relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[9px] pb-[6px] bg-white">
                    {
                        budgetF.map((item) => {
                            const changeValue = item.toLowerCase().replace(" ", "-").replace(" - ", "-")
                            return(
                                <option value={changeValue}>{item}</option>
                            )
                        })
                    }
                </select>
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="absolute top-[22px] right-6"
                    >
                    <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8zM7.646.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 1.707V5.5a.5.5 0 01-1 0V1.707L6.354 2.854a.5.5 0 11-.708-.708l2-2zM8 10a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L7.5 14.293V10.5A.5.5 0 018 10z"
                    />
                </svg>
            </div>

            <div className="w-full relative px-[15px]">
                <textarea id="message" type="text" value={form.message} onChange={(e) => setForm({...form, message:e.target.value})} cols={40} rows={6} className="relative shadow-input-cont mb-[15px] focus:outline-none block w-full border-[1px] font-bold text-xs rounded-[4px] text-[#555] border-solid border-[#d9d9d9] leading-[1.6] pt-[26px] pr-[16px] pl-[10px] pb-[6px] bg-white"></textarea>
                <label htmlFor="message" className="inline-block mb-[5px] font-bold absolute top-[6px] left-[25px] uppercase text-[10px] text-[#969696] cursor-text">Message</label>
            </div>

            <div className="w-[100%] relative px-[15px]">
                <button type="submit" className="py-[10px] px-[20px] font-bold bg-[#DA2128] text-white rounded-[3px] border-none">Get A Quote Now!</button>
            </div>
       </form>
    )
}