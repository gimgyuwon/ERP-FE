export default function MemberRow({ member }: { member: any }) {
  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-[#F2F8ED] rounded-lg gap-4">
      {/* 프로필 사진 및 기본 정보 */}
      <div className="flex items-center gap-4 flex-1 min-w-[250px]">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#fff] rounded-full flex justify-center items-center text-white text-lg">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={`${member.name}의 프로필`}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            "사진 없음"
          )}
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-gray-800 font-bold text-sm sm:text-[16px]">
              {member.name}
            </div>
            <div
              className={`px-2 py-1 text-xs sm:text-sm rounded ${
                member.gender === "남"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-pink-100 text-pink-600"
              }`}
            >
              {member.gender}
            </div>
            <div
              className={`px-2 py-1 text-xs sm:text-sm rounded ${
                member.licenseType === "1종"
                  ? "bg-white text-gray-500"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {member.licenseType}
            </div>
          </div>
          <div className="text-gray-600 text-xs sm:text-sm">{member.phone}</div>
          <div
            className={`px-2 w-12 sm:w-14 py-1 justify-center text-xs sm:text-sm rounded-full ${
              member.planType === "시간제"
                ? "bg-[#3C6229] text-white"
                : "bg-[#B4D89C] text-black"
            }`}
          >
            {member.planType}
          </div>
        </div>
      </div>

      {/* 이용권 종류 */}
      <div className="flex items-center justify-center font-medium flex-1 min-w-[150px]">
        <div className="text-xs sm:text-sm bg-[#f6f6f6] border border-[#d1d1d1] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-[#3a3a3a]">
          {member.planName}
        </div>
      </div>

      {/* 남은 시간 */}
      <div className="flex flex-1 items-center justify-center gap-2 min-w-[180px]">
        {/* 사용시간 */}
        <div className="flex flex-col items-center justify-center bg-white border border-[#DB5461] rounded-lg w-[80px] h-[70px]">
          <span className="text-[#DB5461] font-semibold text-sm">사용시간</span>
          <span className="text-[#DB5461] font-bold text-lg">
            {member.usedTime}H
          </span>
        </div>

        {/* 잔여시간 */}
        {member?.planType === "시간제" && (
          <div className="flex flex-col items-center justify-center bg-white border border-[#DB5461] rounded-lg w-[80px] h-[70px]">
            <span className="text-[#DB5461] font-semibold text-sm">
              잔여시간
            </span>
            <span className="text-[#DB5461] font-bold text-lg">
              {member.remainingTime}H
            </span>
          </div>
        )}

        {/* 잔여기간 */}
        <div className="flex flex-col items-center justify-center bg-white border border-[#DB5461] rounded-lg w-[80px] h-[70px]">
          <span className="text-[#DB5461] font-semibold text-sm">잔여기간</span>
          <span className="text-[#DB5461] font-bold text-lg">
            {member.remainingPeriod}D
          </span>
        </div>
      </div>

      {/* 지각/결석 */}
      <div className="flex flex-col items-center justify-center bg-white border border-[#B4D89C] rounded-lg w-[70px] sm:w-[86px] h-[60px] sm:h-[70px]">
        <span className="text-gray-500 text-xs sm:text-sm leading-tight">
          지각/결석
        </span>
        <span className="text-gray-800 font-bold text-sm sm:text-lg">2/1</span>
      </div>

      {/* 등록일 및 기타 결제 */}
      <div className="flex flex-col items-end flex-1 min-w-[150px]">
        <div className="text-gray-500 text-xs sm:text-sm">
          {member.registrationDate}
        </div>
        <div
          className={`text-xs sm:text-sm font-bold ${
            member.payment > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {member.payment > 0 ? `+${member.payment}` : member.payment}
        </div>
      </div>
    </div>
  );
}
