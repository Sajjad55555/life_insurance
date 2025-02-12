// 파일명: DentalInsurance.tsx
import React from 'react';

const DentalInsurance: React.FC = () => {
  return (
    <div className="w-full flex flex-col flex-wrap px-4 max-w-[300px] md:max-w-[1100px] mx-auto ">
      {/* ======================= 주계약 Section ======================= */}
      <div className='flex text-[8px] md:text-[20px] w-full flex-col gap-4 flex-wrap'>
        <div>
          <h2 className="text-[8px] md:text-2xl font-semibold mb-4">주계약</h2>
          <h3 className="sr-only">주계약 (무)THE건강한치아보험 보장내역</h3>
          <p className="text-base mb-6">
            <span className="font-extrabold text-[#150f96]">
              (무)THE건강한치아보험V
            </span>
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mb-6" style={{ borderCollapse: 'collapse' }}>
            <caption className="sr-only">
              Main contract (No) THE Healthy Teeth Insurance V Coverage Details; Benefits Name, Payment Reason, Payment Amount.
            </caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
              <col style={{ width: '45%' }} />
            </colgroup>
            <thead>
              <tr className="border-t font-extrabold items-center">
                <th scope="col" className="border-b px-4 py-2 text-left">
                  Urgent call
                </th>
                <th scope="col" className="border px-4 py-2 text-left">
                  Reason for Payment
                </th>
                <th scope="col" className="border-b px-4 py-2 text-left">
                  Payment Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="border-t px-4 py-2 font-extrabold text-[#150f96]"
                >
                  Charging treatment insurance
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  If the insured person is diagnosed with a dental condition (caries), periodontal disease (gum disease), or an injury during the insurance period, and receives filling treatment on the affected tooth after the dental treatment coverage starts.
                  <br />
                  <span className="block text-[#767676]">
                    (Paid per tooth treated)
                  </span>
                </td>
                <td className="border-t px-4 py-2">
                  <div className="overflow-x-auto">
                    <table className="w-full mb-2">
                      <caption className="sr-only">
                        Filling Treatment Insurance; Filling Material, Payment Amount Details.
                      </caption>
                      <colgroup>
                        <col style={{ width: '60%' }} />
                        <col style={{ width: '40%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="border-t border-r px-2 py-1 text-left"
                          >
                            Filling Material
                          </th>
                          <th
                            scope="col"
                            className="border-t px-2 py-1 text-left"
                          >
                            Payment Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            className="border-t border-r px-2 py-1"
                          >
                            Gold, Porcelain (Ceramic)
                          </th>
                          <td className="border-t px-2 py-1 text-center text-[#150f96]">
                            150,000 KRW
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="border-t border-r px-2 py-1"
                          >
                            Amalgam
                          </th>
                          <td className="border-t px-2 py-1 text-center text-[#150f96]">
                            10,000 KRW
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="border-t border-r px-2 py-1"
                          >
                            Other than Gold, Porcelain (Ceramic), Amalgam
                          </th>
                          <td className="border-t px-2 py-1 text-center text-[#150f96]">
                            50,000 KRW
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <span className="block text-[#767676]">
                    (However, if the treatment was performed after 1 year from the policy start date but before the day prior to the 1st anniversary of the policy, the payment is 50% of the above amounts.)
                  </span>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-t border-b px-4 py-2 font-extrabold text-[#150f96]"
                >
                  Crown Treatment Insurance
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  If the insured person is diagnosed with a dental condition (caries), periodontal disease (gum disease), or an injury during the insurance period, and receives crown treatment on the affected tooth after the dental treatment coverage starts.
                  <br />
                  <span className="block text-[#767676]">
                    (Paid per treated tooth, with a limit of 3 treatments per year for both baby and permanent teeth within 2 years of the contract. No limit on the number of treatments after 2 years.)
                  </span>
                </td>
                <td className="border-t border-b px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium text-[#150f96]">200,000 KRW</dt>
                    <dd>
                      <span className="text-[#767676]">
                        (However, if the treatment was performed after 1 year from the policy start date but before the day prior to the 1st anniversary of the policy, the payment is 50% of the above amount.)
                      </span>
                    </dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-row gap-2 mb-8">
        <div className='' >
          <strong className="block text-lg font-extrabold mb-2 text-[#150f96]">
            <span>주</span>
            <span className="sr-only">주의사항</span>
          </strong>
        </div>
        <div className="overflow-x-auto">
          <ul className="list-decimal list-inside text-[8px] md:text-[14px] space-y-2 text-[#767676]">
            <li>
              피보험자가 보험기간 중 사망하거나 약관 제4조(&quot;영구치&quot;의 정의)에서 정한 영구치가 모두 상실되어 약관 제10조(보험금의 지급사유)에서 정하는 보험금 지급사유가 더 이상 발생할 수 없는 경우에는 이 계약은 그 때부터 효력이 없으며, 효력이 없어진 당시의 계약자적립액을 계약자에게 지급합니다.
            </li>
            <li>
              보험료 납입기간 중 피보험자가 장해분류표 중 동일한 재해 또는 재해 이외의 동일한 원인으로 여러 신체부위의 장해지급률을 더하여 50% 이상인 장해상태가 되었을 경우에는 차회 이후의 보험료 납입을 면제하여 드립니다.
            </li>
            <li>
              치과치료보장개시일은 계약일로부터 그 날을 포함하여 90일이 지난 날의 다음날로 하며, 부활(효력회복)계약의 경우에는 부활(효력회복)일을 포함하여 90일이 지난 날의 다음날로 합니다.
            </li>
            <li>
              보험기간 중 발생한 재해로 인한 치과치료의 경우 계약일부터 해당 치료보험금의 100%를 지급합니다.
            </li>
            <li>
              동일한 치아에 대하여 동시에 충전치료, 크라운치료 중 두 가지 이상의 치과치료를 포함하는 복합형태의 치료를 받은 경우 해당 치료보험금 중 가장 높은 한 가지의 해당 치료보험금을 지급합니다.
            </li>
            <li>
              이미 충전치료, 크라운치료를 받은 부위에 대하여 &quot;치아우식증(충치), 치주질환(잇몸질환) 또는 재해&quot;를 원인으로 하지 않는 수리, 복구, 대체치료를 한 경우에는 해당 치료보험금을 지급하지 않으며, 새로운 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로 충전치료, 크라운치료를 한 경우에는 해당 치료보험금을 지급합니다.
            </li>
          </ul>
        </div>
      </div>

      {/* ============ 선택특약 (무)신보철치료보장특약 Section ============ */}
      <div className='flex flex-col  flex-wrap'>
        <div>
          <h2 className="text-[10px] md:text-2xl school-font md:mb-6">선택특약</h2>
          <div className="flex flex-col school-font md:flex-row md:justify-between">
            <p className="text-[15px] nexonReg-font mb-3 text-[#150f96]">
              (무)신보철치료보장특약
            </p>
            <span className=" text-[#767676]">
              기준: 가입금액 1,000만원
            </span>
          </div>
        </div>
        <div className="overflow-x-auto text-[8px] md:text-[14px] nexonReg-font">
          <table className="w-full mb-6 border-[#767676]">
            <caption className="sr-only">
              선택특약 (무)신보철치료보장특약 보장내역;급부명, 지급사유, 지급금액의 항목으로 정보 제공
            </caption>
            <colgroup>
              <col style={{ width: '25%' }} />
              <col />
              <col style={{ width: '35%' }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="border-b border-t-2 border-black px-4 py-2 text-left">
                  급부명
                </th>
                <th scope="col" className="border border-t-2 px-4  border-black py-2 text-left">
                  지급사유
                </th>
                <th scope="col" className="border-b border-t-2 border-black px-4 py-2 text-left">
                  지급금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="border-b  nexonReg-font text-[#150f96] px-4 py-2 font-bold"
                >
                  가철성의치(틀니)(Denture)
                  <br />
                  치료보험금
                </th>
                <td className="border  px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                  보철치료보장개시일 이후에 최초로 영구치 발거를 진단확정받고 해당 영구치를 발거한 부위에 가철성의치(틀니)
                  치료를 받았을 때
                  <br />
                  <span className="block text-[#767676]">
                    (보철물당 지급하며, 연간 1회를 한도로 함)
                  </span>
                </td>
                <td className="border-b px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium text-[#150f96]">100만원</dt>
                    <dd>
                    <span className="text-[#767676]">
    (다만, 보철치료보장개시일 이후 &quot;보험계약일부터 2년이 지난 보험 계약해당일 전일&quot; 이전에
    치아우식증(충치) 또는 치주질환(잇몸질환)을 원인으로 영구치를 발거한 경우 상기 금액의 50%를 지급함)
</span>
                    </dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-t text-[#150f96] border-b px-4 py-2 font-bold"
                >
                  고정성가공의치(브릿지)(Bridge)
                  <br />
                  치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                  보철치료보장개시일 이후에 최초로 영구치 발거를 진단확정받고 해당 영구치를 발거한 부위에
                  고정성가공의치(브릿지) 치료를 받았을 때
                  <br />
                  <span className="block text-[#767676]">
                    (영구치 발거 1개당 지급하며, 연간 3개를 한도로 함)
                  </span>
                </td>
                <td className="border-t px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium text-[#150f96]">50만원</dt>
                    <dd>
                    <span className="text-[#767676]">
    (다만, 보철치료보장개시일 이후 &quot;보험계약일부터 2년이 지난 보험계약해당일 전일&quot; 이전에
    치아우식증(충치) 또는 치주질환(잇몸질환)을 원인으로 영구치를 발거한 경우 상기 금액의 50%를 지급함)
</span>
                    </dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-b text-[#150f96] px-4 py-2 font-bold"
                >
                  임플란트(Implant)
                  <br />
                  치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                  보철치료보장개시일 이후에 최초로 영구치 발거를 진단확정받고 해당 영구치를 발거한 부위에
                  임플란트 치료를 받았을 때
                  <br />
                  <span className="block text-[#767676]">
                    (영구치 발거 1개당 지급하며, 연간 3개를 한도로 함)
                  </span>
                </td>
                <td className="border-b border-t px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium text-[#150f96]">100만원</dt>
                    <dd>
                      <span className="text-[#767676]">
                        (다만, 보철치료보장개시일 이후 “보험계약일부터 2년이 지난 보험계약해당일 전일” 이전에
                        치아우식증(충치) 또는 치주질환(잇몸질환)을 원인으로 영구치를 발거한 경우 상기 금액의 50%를 지급함)
                      </span>
                    </dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-b px-4 py-2 text-[#150f96] font-bold"
                >
                  재식립 임플란트(Re-Implant)
                  <br />
                  치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 임플란트 치료보험금 지급사유가 발생하고, 해당 영구치의 임플란트 치료일로부터 그 날을 포함하여
                  1년이 지난 날의 다음 날 이후에 해당 임플란트를 제거하고 동일 부위에 재식립 임플란트 치료를 받았을 때
                  <br />
                  <span className="block text-[#767676]">
                    (동일부위 당 최초 1회를 한도로 함)
                  </span>
                </td>
                <td className="border-b px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium text-[#150f96]">100만원</dt>
                    <dd></dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-row gap-2 mb-8">
        <div>
          <strong className="block text-[10px] md:text-lg school-font mb-2 text-[#150f96]">
            <span>주</span>
            <span className="sr-only">주의사항</span>
          </strong>
        </div>
        <div>
          <ul className="list-decimal list-inside text-[8px] md:text-[14px]  space-y-2 text-[#767676]">
            <li>
              주계약의 보험료 납입이 면제된 우 또는 약관 제3조(“영구치”의 정의)에서 정한 “영구치”가 모두 상실된 경우에는 이 특약의 차회 이후 보험료 납입을 면제하여 드립니다.
            </li>
            <li>
              최초계약의 경우 보철치료보장개시일은 계약일로부터 그 날을 포함하여 90일이 지난 날의 다음 날로 하며, 부활(효력회복)계약의 경우에는 부활(효력회복)일을 포함하여 90일이 지난 날의 다음날로 합니다.
            </li>
            <li>
              보험기간 중 발생한 재해로 인한 보철치료의 경우 계약일부터 해당 치료보험금의 100%를 지급합니다.
            </li>
            <li>
              재식립 임플란트 치료보험금은 보철치료보장개시일 이후 보험기간 중 임플란트 치료보험금 지급사유가 발생한 임플란트에 한하여 해당 임플란트를 제거한 동일 부위 당 최초 1회를 한도로 지급하며, 이미 재식립 임플란트 치료보험금 지급사유가 발생한 부위에 다시 재식립 임플란트치료를 받은 경우에는 해당 치료보험금을 지급하지 않습니다.
            </li>
            <li>
              피보험자가 보철치료보장개시일 이후 보험기간 중 임플란트 치료보험금 지급사유가 발생하고, “해당 영구치의 임플란트 치료일로부터 그 날을 포함하여 1년이 지난 날” 이전에 재식립 임플란트 치료보험금 지급사유가 발생한 경우에는 해당 치료보험금을 지급하지 않습니다.
            </li>
            <li>
              동일한 영구치에 대하여 동시에 상기 표의 보철치료 중 두 가지 이상의 보철치료를 포함하는 복합형태의 치료를 받은 경우 해당 치료보험금 중 가장 높은 한 가지의 해당 치료보험금을 지급합니다.
            </li>
            <li>
              이미 가철성의치(틀니)치료, 고정성가공의치(브릿지)치료, 임플란트치료를 받은 부위에 대하여 수리, 복구, 대체치료를 하더라도 해당 치료보험금을 지급하지 않습니다. (단, 재식립 임플란트 치료 제외)
            </li>
          </ul>
        </div>
      </div>

      {/* ============ 선택특약 (무)크라운보장특약 Section ============ */}
      <div className='flex flex-col school-font  flex-wrap'>
        <div>
          <h2 className="text-2xl font-semibold mb-4">선택특약</h2>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-base font-bold mb-6 text-[#150f96]">
              (무)신보철치료보장특약
            </p>
            <span className="font-medium text-[#767676]">
              기준: 가입금액 1,000만원
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-b border-t border-gray-300 mb-6">
            <caption className="sr-only">
              선택특약 (무)크라운보장특약 보장내역;급부명, 지급사유, 지급금액의 항목으로 정보 제공
            </caption>
            <colgroup>
              <col style={{ width: '15%' }} />
              <col />
              <col style={{ width: '35%' }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="border-b border-t px-4 py-2 text-left">
                  급부명
                </th>
                <th scope="col" className="border px-4 py-2 text-left">
                  지급사유
                </th>
                <th scope="col" className="border-b border-t px-4 py-2 text-left">
                  지급금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="border-b px-4 py-2 font-bold text-[#150f96]"
                >
                  크라운치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                  크라운치료보장개시일 이후에 최초로 크라운치료를 진단확정받고 해당 치아에 크라운치료를 받았을 때
                  <br />
                  <span className="block text-[#767676]">
                    (치아 치료 1개당 지급하며, 계약일부터 2년미만유치∙영구치 각각에 대해 연간 3개를 한도로, 계약일부터 2년 이후 개수제한 없음)
                  </span>
                </td>
                <td className="border-t px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-bold text-[#150f96]">20만원</dt>
                    <dd>
                    <span className="text-[#767676]">
    (다만, 크라운치료보장개시일 이후 &quot;보험계약일부터 1년이 지난 보험계약해당일 전일&quot; 이전에
    치아우식증(충치) 또는 치주질환(잇몸질환)을 원인으로 치아를 치료한 경우 상기 금액의 50%를 지급함)
</span>
                    </dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex flex-row gap-2 mb-8'>
        <div>
          <strong className="block text-lg font-semibold mb-2 text-[#150f96]">
            <span>주</span>
            <span className="sr-only">주의사항</span>
          </strong>
        </div>
        <div className="mb-8  ">

          <ul className="list-decimal list-inside text-[8px] md:text-[14px]  space-y-2 text-[#767676]">
            <li>
              주계약의 보험료 납입이 면제된 경우 이 특약의 차회 이후 보험료 납입을 면제합니다.
            </li>
            <li>
              최초계약의 경우 크라운치료보장개시일은 계약일로부터 그 날을 포함하여 90일이 지난 날의 다음날로 하며, 부활(효력회복) 계약의 경우에는 부활(효력회복)일을 포함하여 90일이 지난 날의 다음날로 합니다.
            </li>
            <li>
              보험기간 중 발생한 재해로 인한 크라운치료의 경우 계약일부터 해당 치료보험금의 100%를 지급합니다.
            </li>
            <li>
              이미 크라운치료를 받은 부위에 대하여 치아우식증(충치), 치주질환(잇몸질환) 또는 재해에 기인하지 않는 수리, 복구, 대체치료를 한 경우에는 해당 치료보험금을 지급하지 않으며, 새로운 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로 크라운치료를 한 경우에는 해당 치료보험금을 지급합니다.
            </li>
            <li>
              피보험자가 보험기간 중 사망하거나 약관 제4조(&quot;영구치&quot;의 정의)에서 정한 영구치가 모두 상실되어 약관 제8조(보험금의 지급사유)에서 정하는 보험금 지급사유가 더 이상 발생할 수 없는 경우에는 이 특약은 그때부터 효력이 없으며, 효력이 없어진 당시의 계약자적립액을 계약자에게 지급합니다.
            </li>
          </ul>
        </div>
      </div>

      {/* ============ 선택특약 (무)소액치과치료특약 Section ============ */}
      <div>
        <div>
          <h2 className="text-[12px] md:text-2xl font-semibold mb-4 text-[#150f96]">
            선택특약
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-base font-bold mb-6 text-[#150f96]">
              (무)신보철치료보장특약
            </p>
            <span className="font-medium text-[#767676]">
              기준: 가입금액 1,000만원
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mb-6">
            <caption className="sr-only">
              선택특약 (무)소액치과치료특약 보장내역;급부명, 지급사유, 지급금액의 항목으로 정보 제공
            </caption>
            <colgroup>
              <col style={{ width: '20%' }} />
              <col />
              <col style={{ width: '20%' }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="border-b border-t px-4 py-2 text-left">
                  급부명
                </th>
                <th scope="col" className="border px-4 py-2 text-left">
                  지급사유
                </th>
                <th scope="col" className="border-b border-t px-4 py-2 text-left">
                  지급금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="border-b px-4 py-2 font-medium text-[#150f96]"
                >
                  치수치료(신경치료)
                  <br />
                  보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                  소액치과치료보장개시일 이후에 최초로 치수치료(신경치료)를 진단 확정받고, 해당 치아에 대하여 치수치료(신경치료)를 받았을 경우
                  <br />
                  <span className="block">
                    (치아 치료 1개당 지급함)
                  </span>
                </td>
                <td className="border-b text-[#150f96] px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium">2만원</dt>
                    <dd>&nbsp;</dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-b px-4 py-2 text-[#150f96] font-medium"
                >
                  영구치 발거
                  <br />
                  치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                  소액치과치료보장개시일 이후에 최초로 영구치 발거치료를 진단 확정 받고, 해당 치아에 대하여 발거 치료를 받았을 경우
                  <br />
                  <span className="block text-[#767676]">
                    (영구치 발거 1개당 지급함)
                  </span>
                </td>
                <td className="border-b text-[#150f96] px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium">2만원</dt>
                    <dd>&nbsp;</dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-b px-4 py-2 font-medium text-[#150f96]"
                >
                  치석제거(스케일링)
                  <br />
                  치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 소액치과치료보장개시일 이후에 최초로 치주질환(잇몸질환)치료를 위한 치석제거치료(스케일링)를 진단 확정받고, 의료기관 중 치과에서
                  국민건강보험법에 정한 요양급여 또는 의료급여법에 정한 의료급여 항목에 해당하는 치석제거(스케일링)치료를 받았을 때
                  <br />
                  <span className="block text-[#767676]">
                    (치료1회당 지급하며, 연간 1회를 한도로 함)
                  </span>
                </td>
                <td className="border-b text-[#150f96] px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium">1만원</dt>
                    <dd>&nbsp;</dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-b px-4 py-2 font-medium text-[#150f96]"
                >
                  주요치주질환(잇몸질환)
                  <br />
                  치료보험금
                </th>
                <td className="border px-4 py-2 whitespace-normal">
                  피보험자가 보험기간 중 소액치과치료보장개시일 이후에 최초로 주요치주질환(잇몸질환)치료를 진단 확정받고, 의료기관 중 치과에서
                  국민건강보험법에 정한 요양급여 또는 의료급여법에 정한 의료급여 항목에 해당하는 주요치주질환(잇몸질환)치료를 받았을 때
                </td>
                <td className="border-b text-[#150f96] px-4 py-2">
                  <dl className="space-y-1">
                    <dt className="font-medium text-[#767676]">2만원</dt>
                    <dd>
                    <span className="text-[#767676]">
    (약관 &quot;주요치주질환(잇몸질환)치료분류표&quot; 및 &quot;주요치주질환치료 급여 인정 기준&quot;에 따라 지급함)
</span>
                    </dd>
                  </dl>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='flex flex-row gap-2 mb-8'>
        <div><strong className="block text-[12px] md:text-lg font-semibold mb-2 text-[#150f96]">
          <span>주</span>
          <span className="sr-only">주의사항</span>
        </strong></div>
        <div>
        <ul className="list-decimal list-inside text-[8px] md:text-[14px] space-y-2 text-[#767676]">
  <li>
    주계약의 보험료 납입이 면제된 경우 또는 치아가 모두 상실된 경우에는 이 특약의 차회 이후 보험료 납입을 면제합니다.
  </li>
  <li>
    최초계약의 경우 소액치과치료보장개시일은 계약일로부터 그 날을 포함하여 90일이 지난 날의 다음날로 하며, 부활(효력회복)계약의 경우에는 부활(효력회복)일을 포함하여 90일이 지난 날의 다음날로 합니다.
  </li>
  <li>
    이미 치수치료(신경치료)를 받은 부위에 대하여 새로운 “치아우식증(충치), 치주질환(잇몸질환) 또는 재해”를 원인으로 하지 않는 수리, 복구, 대체치료를 한 경우에는 해당 치료보험금을 지급하지 않으며, 새로운 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로 치수치료(신경치료)를 한 경우에는 해당 치료보험금을 지급합니다.
  </li>
  <li>
    &quot;주요치주질환치료 급여 인정 기준&quot;은 약관 제11조(&quot;주요치주질환(잇몸질환)치료&quot;의 정의)에서 정한 기준에 따릅니다.
  </li>
  <li>
    동일한 잇몸 부위에 두 가지 이상의 주요치주질환(잇몸질환)치료를 한 경우, 상위 치료에 대하여만 치료보험금을 지급합니다.
  </li>
  <li>
    피보험자가 보험기간 중 사망한 경우에는 이 특약은 그 때부터 효력이 없으며, 사망 당시의 계약자적립액을 계약자에게 지급합니다.
  </li>
</ul>

        </div>
      </div>


      {/* ============ 선택특약 (무)전치부보철치료보장특약 Section ============ */}
      <h2 className="text-[15px] md:text-2xl font-semibold mb-4">선택특약</h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="text-base font-bold mb-6 text-[#150f96]">
          (무)신보철치료보장특약
        </p>
        <span className="font-medium text-[#767676]">
          기준: 가입금액 1,000만원
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mb-6">
          <caption className="sr-only">
            선택특약 보장내역;급부명, 지급사유, 지급금액의 항목으로 정보 제공
          </caption>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col />
            <col style={{ width: '20%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="border-b border-t px-4 py-2 text-left">
                급부명
              </th>
              <th scope="col" className="border px-4 py-2 text-left">
                지급사유
              </th>
              <th scope="col" className="border-b border-t px-4 py-2 text-left">
                지급금액
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="border-b px-4 py-2 font-medium text-[#150f96]"
              >
                전치부 고정성가공의치(브릿지)(Bridge) 치료보험금
              </th>
              <td className="border px-4 py-2 whitespace-normal">
                피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                보철치료보장개시일 이후에 최초로 전치부 영구치 발거를 진단확정받고 해당 영구치를 발거한 부위에
                고정성가공의치(브릿지) 치료를 받았을 때
                <br />
                <span className="block text-[#767676]">
                  (전치부 영구치 발거 1개당 지급하며, 연간 3개를 한도로 함)
                </span>
              </td>
              <td className="border-b px-4 py-2">
                <dl className="space-y-1">
                  <dt className="font-medium text-[#150f96]">25만원</dt>
                  <dd>
                    <span className="text-[#767676]">
                      다만, 보철치료보장개시일 이후 “보험계약일부터 2년이 지난 보험계약해당일 전일” 이전에
                      치아우식증(충치) 또는 치주질환(잇몸질환)을 원인으로 전치부 영구치를 발거한 경우 상기 금액의 50%를 지급함
                    </span>
                  </dd>
                </dl>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="border-b px-4 py-2 font-medium text-[#150f96]"
              >
                전치부 임플란트(Implant) 치료보험금
              </th>
              <td className="border px-4 py-2 whitespace-normal">
                피보험자가 보험기간 중 치아우식증(충치), 치주질환(잇몸질환) 또는 재해를 직접적인 원인으로
                보철치료보장개시일 이후에 최초로 전치부 영구치 발거를 진단확정받고 해당 영구치를 발거한 부위에
                임플란트 치료를 받았을 때
                <br />
                <span className="block text-[#767676]">
                  (전치부 영구치 발거 1개당 지급하며, 연간 3개를 한도로 함)
                </span>
              </td>
              <td className="border-b px-4 py-2 text-[#150f96]">
                <dl className="space-y-1">
                  <dt className="font-medium">50만원</dt>
                  <dd>
                    <span className="text-[#767676]">
                      다만, 보철치료보장개시일 이후 “보험계약일부터 2년이 지난 보험계약해당일 전일” 이전에
                      치아우식증(충치) 또는 치주질환(잇몸질환)을 원인으로 전치부 영구치를 발거한 경우 상기 금액의 50%를 지급함
                    </span>
                  </dd>
                </dl>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-row gap-2 mb-8'>
        <div> <strong className="block text-lg font-semibold mb-2 text-[#150f96]">
          <span>주</span>
          <span className="sr-only">주의사항</span>
        </strong></div>
        <div>
          <ul className="list-decimal list-inside text-[8px] md:text-[14px]  space-y-2 text-[#767676]">
            <li>
              주계약의 보험료 납입이 면제된 경우 이 특약의 차회 이후 보험료 납입을 면제하여 드립니다.
            </li>
            <li>
              최초계약의 경우 보철치료보장개시일은 계약일로부터 그 날을 포함하여 90일이 지난 날의 다음 날로 하며, 부활(효력회복)계약의 경우에는 부활(효력회복)일을 포함하여 90일이 지난 날의 다음날로 합니다.
            </li>
            <li>
              보험기간 중 발생한 재해로 인한 보철치료의 경우 계약일부터 해당 치료보험금의 100%를 지급합니다.
            </li>
            <li>
              갱신계약의 경우에는 “갱신일”을 보철치료보장개시일로 하며, 지급사유 발생시 해당 치료보험금의 100%를 지급합니다. 다만, 부활(효력회복)계약의 경우에는 부활(효력회복)일을 포함하여 90일이 지난 날의 다음날로 합니다.
            </li>
            <li>
              동일한 전치부 영구치에 대하여 동시에 상기 표의 보철치료 중 두 가지 이상의 보철치료를 포함하는 복합형태의 치료를 받은 경우 해당 치료보험금 중 가장 높은 한 가지의 해당 치료보험금을 지급합니다.
            </li>
            <li>
              이미 가철성의치(틀니)치료, 고정성가공의치(브릿지)치료, 임플란트치료를 받은 부위에 대하여 수리, 복구, 대체치료를 하더라도 해당 치료보험금을 지급하지 않습니다.
            </li>
            <li>
              피보험자가 보험기간 중 사망하거나 약관 제3조(&quot;영구치&quot;의 정의) 및 약관 제6조(&quot;전치부&quot;, &quot;보철치료&quot;의 정의) 제1항에서 정한 전치부 영구치가 모두 상실되어 약관 제9조(보험금의 지급사유)에서 정하는 보험금 지급사유가 더 이상 발생할 수 없는 경우에는 이 특약은 그 때부터 효력이 없으며, 효력이 없어진 당시의 계약자적립액을 계약자에게 지급합니다.
            </li>
            <li>
              보철치료(브릿지, 임플란트치료)의 경우 전치부 영구치 발거일을 기준으로 보장되며, 브릿지, 임플란트를 치료한 날 기준으로는 보장되지 않습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default DentalInsurance;



