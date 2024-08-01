export const mangQueBoi = [
  "Người đâu gặp gỡ làm chi\nTrăm năm biết có duyên gì hay không\nTình ta đằm thắm mặn nồng\nBên ngoài đằm thắm, bên trong lạnh lùng.",
  "Tưởng rằng hạnh phúc trăm năm\nCùng chung chăn gối trăm năm trọn đời\nNào ngờ kèo gẫy cột rơi\nAnh đi lấy vợ tôi đi lấy chồng.",
  "Đổi tình bạn sang tình yêu\nNhư chàng Kim Trọng gặp Kiều\nÁi ân bạn đời khóc cùng xuân\nTình yêu bạn sẽ sang xuân một lần.",
  "Tưởng rằng nguyệt nọ hoa kia\nNgờ ra nào có tiếc gì hỡi ai\nChữ tri gắn bó một hai\nNgày nay chờ đợi ngày mai sẽ thành.",
  "Người yêu chẳng có thuỷ chung\nNay đào mai mận, hết hồng lại hoa\nXin đừng oán trách ong tơ\nHãy nên lựa chọn kẻo mơ lại nhiều.",
  "Dù còn là mối tình đầu\nLần sau sẽ rõ lần sau sẽ thành\nDở hay là mối hữu tình\nĐể ai để mối tỏ tình cho ai.",
  "Không ham địa vị giàu sang\nChẳng ước mà được chẳng cần mà nên\nTình yêu cần trách đảo điên\nKhen ai khéo nết thành đôi vợ chồng.",
  "Chẳng duyên chẳng nợ mà cần\nGặp nhau hạnh phúc gối chăn cả đời\nThật là tốt số đẹp đôi\nThôi đừng kén chọn cho hoài tuổi xuân.",
  "Khen ai khéo gặp tỏ tình\nCho thuyền quên bến cho anh quên nàng\nCho tình dang dở dở dang\nDuyên tơ vỡ mối cho đàn đứt dây.",
];

export const chuyenTenThanhSo = (ten) => {
  const mangTraCuu = [
    ["A", "J", "S"],
    ["B", "K", "T"],
    ["C", "L", "U"],
    ["D", "M", "V"],
    ["E", "N", "W"],
    ["F", "O", "X"],
    ["G", "P", "Y"],
    ["H", "Q", "Z"],
    ["I", "R"],
  ];

  let ketQua = 0;

  for (let c of ten) {
    const viTriKyTu = mangTraCuu.findIndex((item) => item.includes(c));
    ketQua += viTriKyTu + 1;
  }

  return ketQua;
};
