// components/InsurancePanel.js
import Image from 'next/image';

const InsurancePanel = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center mx-auto w-full max-w-[400px] md:max-w-[1000px]">
            <div className="flex flex-col h-full gap-5">
                <div>
                    <h5 className="text-[10px] md:text-[20px] font-bold">
                        <i className="text-[#150f96]">01.</i> When is it guaranteed?
                    </h5>
                </div>
                <div className="flex flex-col md:flex-row border items-center justify-center p-11 border-[#c4c4c4] w-full">
                    <div className="flex flex-col w-full md:w-[60%] gap-2">
                        <div className="w-[90%]">
                            <strong className="mx-8 text-[#333333] font-bold">
                                Guaranteed filling and crown treatment
                            </strong>
                            <br />
                            <span className="text-[#767676]">
                                (In cases caused by dental caries (cavities) or periodontal disease (gum disease))
                            </span>
                        </div>
                        <div className="w-full md:w-[380px] h-auto md:h-[184px]">
                            <Image
                                src="/graph1.jpg"
                                alt="Recharge within 1 year from the day following the 90th day (dental treatment coverage start date) from the insurance contract date, 50% of the crown treatment coverage amount is guaranteed. Recharge within 1 year and the due date, 100% of the crown treatment coverage amount is guaranteed. This is graphically represented in a bar graph."
                                width={380}
                                height={300}
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-[60%] gap-14 mt-5 md:mt-0">
                        <div className="w-[90%]">
                            <strong className="mx-8 text-[#333333] font-bold">
                                Guaranteed filling and crown treatment
                            </strong>
                        </div>
                        <div className="w-full md:w-[380px] h-auto md:h-[184px]">
                            <Image
                                src="/graph1.jpg"
                                alt="Recharge within 1 year from the day following the 90th day (dental treatment coverage start date) from the insurance contract date, 50% of the crown treatment coverage amount is guaranteed. Recharge within 1 year and the due date, 100% of the crown treatment coverage amount is guaranteed. This is graphically represented in a bar graph."
                                width={380}
                                height={300}
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <ul className="g_list_04 list-disc text-[#666666]">
                        <li>
                            The start date of dental treatment coverage is the day following the 90th day from the contract date, including that day.
                        </li>

                        <li className="point_01 text-[#150f96]">
                            This insurance contract protects up to &quot;50 million won&quot; per person (combined with other protection products of this insurance company) for the sum of the surrender refund (or insurance money at maturity) and other payments in accordance with the Depositor Protection Act. In addition, the sum of the accident insurance benefits of this insurance company&apos;s protection products is protected up to &quot;50 million won&quot; per person.
                        </li>

                        <li>
                            If the company does not deliver the insurance policy terms and conditions and the application form for the policyholder to keep when applying, or does not explain important contents of the terms and conditions, or if the policyholder does not sign the application form in his/her own handwriting (including a stamp or electronic signature) when concluding the contract, the policyholder may cancel the contract within 3 months from the date the contract was established.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="-mx-4 flex flex-col gap-3 mt-4">
                <div>
                    <h5 className="text-[20px] font-bold">
                        <i className="text-[#150f96]">02.</i> Exemption from payment of insurance premiums
                    </h5>
                </div>
                <div className="mx-5 text-[15px]">
                    <ul className="g_list_04 list-disc text-[#666666]">
                        <li>
                            If, during the insurance premium payment period, the insured becomes disabled and the disability payment rate for multiple body parts adds up to 50% or more due to the same disaster or the same non-disaster cause in the disability classification table, the insurance premium payment for subsequent periods will be exempted.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="-mx-4 flex flex-col gap-3 mt-4">
                <div>
                    <h5 className="text-[20px] font-bold">
                        <i className="text-[#150f96]">03.</i> In this case, there is no guarantee.
                    </h5>
                </div>
                <div className="mx-5 text-[15px]">
                    <ul className="g_list_04 list-disc text-[#666666]">
                        <li>
                            In the following cases, dental treatment-related insurance benefits will not be paid.
                            <ul>
                                <li className="no_bullet">
                                    - If the dental treatment is diagnosed and confirmed before the start date of dental treatment coverage
                                </li>
                                <li className="no_bullet">
                                    - If you have received dental treatment for reasons other than dental caries (cavities), periodontal disease (gum disease), or disaster, such as dental attrition, periodontal abrasion, or orthodontic preparation
                                </li>
                                <li className="no_bullet">
                                    - In case of temporary dental treatment for other dental treatment
                                </li>
                                <li className="no_bullet">
                                    - In case of new dental caries (cavities), periodontal disease (gum disease), or repair, restoration, or replacement treatment not caused by a disaster on an area that has already received filling or crown treatment
                                </li>
                                <li className="no_bullet">
                                    - Cosmetic treatments such as laminates and gum contouring
                                </li>
                            </ul>
                        </li>
                        <li>
                            If a new dental caries (cavities), periodontal disease (gum disease), or disaster directly causes filling or crown treatment for a tooth that has already received filling or crown treatment, the corresponding treatment insurance will be paid.
                        </li>
                        <li>
                            If you receive combined treatment including two or more dental treatments, such as filling treatment or crown treatment, for the same tooth at the same time, the highest treatment insurance amount will be paid.
                        </li>
                        <li>
                            The above is guidance regarding the main contract.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="-mx-4 flex flex-col gap-3 mt-4">
                <div>
                    <h5 className="text-[20px] font-bold">
                        <i className="text-[#150f96]">04.</i> Things to know before signing up!
                    </h5>
                </div>
                <div className="mx-5 text-[15px]">
                    <ul className="g_list_04 list-disc text-[#666666]">
                        <li>
                            Lina Life Insurance has a duty to provide sufficient explanation of the relevant product, and subscribers are requested to receive sufficient explanation prior to signing up.
                        </li>
                        <li>
                            This insurance covers fillings and crowns during dental treatment.
                        </li>
                        <li>
                            If repair, restoration, or replacement treatment is performed on an area that has already received filling or crown treatment and is not due to dental caries (cavities), periodontal disease (gum disease), or a disaster, the relevant treatment insurance money will not be paid. However, if filling or crown treatment is performed due to new dental caries (cavities), periodontal disease (gum disease), or a disaster directly causing the treatment, the relevant treatment insurance money will be paid.
                        </li>
                        <li>
                            If you receive combined treatment including two or more dental treatments, such as filling treatment or crown treatment, for the same tooth at the same time, the highest treatment insurance amount will be paid.
                        </li>
                        <li>
                            The policyholder may cancel the subscription within 15 days from the date of receiving the insurance policy. However, the subscription may be canceled within 30 days from the date of subscription (within 45 days from the date of subscription if the contract is concluded by phone by a policyholder aged 65 or older), in which case the insurance premium will be refunded within 3 business days from the date of receipt of the cancellation. However, the subscription cannot be canceled for a diagnosis contract, a contract with an insurance period of less than 90 days, or a contract concluded by a professional financial consumer. If the subscription is canceled within the subscription cancellation period, the entire amount of the insurance premium paid will be refunded.
                        </li>
                        <li>
                            If the company does not deliver the insurance policy terms and conditions and the application form for the policyholder to keep when applying, or does not explain important contents of the terms and conditions, or if the policyholder does not sign the application form in his/her own handwriting (including a stamp or electronic signature) when concluding the contract, the policyholder may cancel the contract within 3 months from the date the contract was established.
                        </li>
                        <li>
                            This contract is formally established as an insurance contract after a contract review. Depending on the results of the contract review, a medical opinion may be requested or subscription may be rejected.
                        </li>
                        <li>
                            If you cancel your insurance contract midway, the cancellation refund may be less than or equal to the insurance premiums already paid.
                        </li>
                        <li className="point_01 text-[#150f96]">
                            If you cancel an existing insurance contract and sign a new insurance contract, insurance underwriting may be rejected, premiums may increase, or coverage may change.
                        </li>
                        <li>
                            Please read the product description and terms and conditions before signing an insurance contract (including special provisions).
                        </li>
                        <li className="point_01 text-[#150f96]">
                            This insurance contract protects up to &rdquo;50 million won&rdquo; per person (combined with other protection products of this insurance company) for the sum of the surrender refund (or insurance money at maturity) and other payments in accordance with the Depositor Protection Act. In addition, the sum of the accident insurance benefits of this insurance company&lsquo;s protection products is protected up to &rdquo;50 million won&rdquo; per person.
                        </li>
                        <li>
                            The insured or policyholder must truthfully disclose any information that must be disclosed prior to the contract, such as current or past medical treatment. If important information, such as information that affects the occurrence of a reason for payment of insurance money, is disclosed differently from the facts, the contract may be terminated or the insurance money may not be paid.
                        </li>
                        <li>
                            The above information to be aware of when signing up is information related to the main contract. Please read the product description and terms and conditions before signing the insurance contract. (Including special provisions)
                        </li>
                        <li>
                            In accordance with Article 47 of the Financial Consumer Protection Act and Article 38 of the Enforcement Decree, the subscriber may request termination of the contract in writing within 1 year from the date of learning of any violation of the contract within 5 years from the date of contract conclusion. In the event of termination, the subscriber&lsquo;s accumulated amount at the time of termination will be returned.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default InsurancePanel;
