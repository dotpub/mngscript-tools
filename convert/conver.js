var menk2U = function(text) {
  if (text.length == 0) return text;
  var isMenk = 0,
    isSain = 0,
    r = [];
  if (/[\uE2A0-\uE2EF]/.test(text)) isMenk++;
  else isSain++; if (/[\uE268-\uE26B\uE274\uE275](?:\s|$)/.test(text)) isMenk++;
  else if (/[\uE248\uE249](?:\s|$)/.test(text)) isSain++;
  if (isMenk > isSain) {
    var table = {
      57908: "\u1800",
      57909: "\u1801",
      57910: "\u1802",
      57911: "\u1803",
      57912: "\u1804",
      57913: "\u1805",
      57914: "\u180a",
      57924: "\u1810",
      57925: "\u1811",
      57926: "\u1812",
      57927: "\u1813",
      57928: "\u1814",
      57929: "\u1815",
      57930: "\u1816",
      57931: "\u1817",
      57934: "\u2048",
      57935: "\u2049",
      57936: "\uff01",
      57937: "\uff1f",
      57939: "(",
      57940: ")",
      57945: "\u300a",
      57946: "\u300b",
      57932: "\u1818",
      57933: "\u1819",
      57955: "\u202f",
      57956: "\u1820",
      57968: "\u1821",
      57977: "\u1822",
      57987: "\u1823",
      57995: "\u1824",
      58003: "\u1825",
      58016: "\u1826",
      58029: "\u1827",
      58033: "\u1828",
      58043: "\u1829",
      58049: "\u182a",
      58056: "\u182b",
      58062: "\u182c",
      58081: "\u182d",
      58097: "\u182e",
      58103: "\u182f",
      58109: "\u1830",
      58115: "\u1831",
      58120: "\u1832",
      58125: "\u1833",
      58133: "\u1834",
      58136: "\u1835",
      58142: "\u1836",
      58146: "\u1837",
      58153: "\u1838",
      58157: "\u1839",
      58163: "\u183a",
      58169: "\u183b",
      58175: "\u183c",
      58178: "\u183d",
      58181: "\u183e",
      58184: "\u183f",
      58187: "\u1840",
      58190: "\u1841",
      58191: "\u1842"
    }, x, c;
    text = text.replace(/[\uE27E\uE27F\uE280][\uE27E\uE27F\uE280]/g, "\u1822");
    for (var i = 0; i < text.length; i++) {
      var codeAtI = text.charCodeAt(i);
      if (58047 == codeAtI || codeAtI == 58048) r.push("\u1828");
      else if (57908 <= codeAtI && codeAtI <= 58191) {
        for (c in table) {
          if (c == codeAtI) {
            x = c;
            break
          } else if (c > codeAtI) break;
          x = c
        }
        if (codeAtI == 57962 || codeAtI == 57972) r.push(table[x]);
        r.push(table[x])
      } else r.push(text.charAt(i))
    }
    r = r.join("");
    r = r.replace(/\s\u1823((?:\s|$))/g, "\u202f\u1824$1").replace(/\s\u1825((?:\s|$))/g, "\u202f\u1826$1").replace(/\s([\u1832\u1833\u1834])\u1823((?:\s|$))/g, "\u202f$1\u1824$2").replace(/\s([\u1832\u1833\u1834])\u1825((?:\s|$))/g, "\u202f$1\u1826$2")
  } else {
    text = text.replace(/\uE246\uE247/g, "\u1820").replace(/\uE246\uE24C/g, "\u1822").replace(/\uE246\uE24B/g, "\u1827").replace(/([\uE257\uE25F\uE266\uE28A\uE290])\uE248/g, "$1").replace(/\uE257/g, "\ue256\ue247").replace(/\uE25C/g, "\ue256\ue24e").replace(/\uE25F/g, "\ue25d\ue247").replace(/\uE261/g, "\ue25d\ue24e").replace(/\uE26B/g, "\ue26f\ue24e").replace(/\uE28A/g, "\ue288\ue247").replace(/\uE28D/g, "\ue288\ue24e").replace(/\uE290/g, "\ue28f\ue247").replace(/\uE293/g, "\ue28f\ue24e").replace(/([\uE263\uE264\uE26C\uE26D])\uE24E/g, "$1\u1824").replace(/\uE246\uE24E\uE24C/g, "\u1826").replace(/\uE24E\uE24C/g, "\u1826").replace(/([\uE246\uE251\uE271\uE274\uE277\uE27A])\uE24E/g, "$1\u1824").replace(/(\s|^)([\uE24C\uE256\uE25D\uE27D-\uE288\uE28F])\uE24E/g, "$1$2\u1824").replace(/\uE247([\uE265\uE266\uE267\uE268\uE26B\uE26F])/g, "\u1821$1").replace(/\uE24E([\uE265\uE266\uE267\uE268\uE26B\uE26F])/g, "\u1826$1").replace(/\uE258/g, "\u182a\u182f").replace(/\uE259/g, "\u182a\u182e").replace(/\uE25A/g, "\u182a\u1827").replace(/\uE25B/g, "\u182a\u1822").replace(/\uE25F/g, "\u182b\u1827").replace(/\uE260/g, "\u182b\u1822").replace(/\uE266/g, "\u182d\u1821").replace(/\uE267/g, "\u182d\u182f").replace(/\uE268/g, "\u182d\u182e").replace(/\uE269/g, "\u182d\u1827").replace(/\uE26A/g, "\u182d\u1822").replace(/\uE28B/g, "\u1839\u1827").replace(/\uE28C/g, "\u1839\u1822").replace(/\uE291/g, "\u183a\u1827").replace(/\uE292/g, "\u183a\u1822").replace(/(\uE270)\uE26E/g, "\u182d\u1820").replace(/\uE270\uE248/g, "\u182c\u1820").replace(/\uE249\uE253/g, "\ue253\ue248").replace(/[\uE246\uE24A]/g, "\u1821").replace(/\uE247\uE247/g, "\ue264");
    var words = text.split(" ");
    var w, g;
    for (var i = 0; i < words.length; i++) {
      w = words[i];
      if (/[\uE263\uE264\uE26C\uE26D\uE270]/g.test(w)) g = true;
      else if (/\u1821\u1826\uE265\uE26F/g.test(w)) g = false;
      else if (/\u1820\u1824/g.test(w)) g = true;
      else g = false;
      for (var j = 0; j < w.length; j++) {
        w = w.replace(/([\u1820-\u1827\uE247\uE24C\uE24E])\uE249/g, "$1\u1828");
        if (g) w = w.replace(/[\uE247\uE248\uE249]/g, "\u1820");
        else w = w.replace(/[\uE247\uE248\uE249]/g, "\u1821");
        w = w.replace(/\uE24F([\u1820\u1821])/g, "\u1838$1$1").replace(/\uE253([\u1820\u1821])/g, "\u1828$1$1").replace(/\uE273([\u1820\u1821])/g, "\u182e$1$1").replace(/\uE276([\u1820\u1821])/g, "\u182f$1$1").replace(/\uE279([\u1820\u1821])/g, "\u1830$1$1").replace(/\uE284([\u1820\u1821])/g, "\u1837$1$1");
        if (g) w = w.replace(/[\uE24E\uE24F]/g, "\u1824");
        else w = w.replace(/[\uE24E\uE24F]/g, "\u1826")
      }
      r.push(w)
    }
    r = r.join(" ");
    r = r.replace(/(\s|^)\uE24B/g, "$1\u1838").replace(/\uE24B([\u1820-\u1826\uE24C])/g, "\u1838$1").replace(/\uE24B/g, "\u1827").replace(/\uE24D([\u1820\u1821])/g, "\u1836$1$1").replace(/(\s|^)\uE24C([\u1820-\u1826\uE24C])/g, "$1\u1835$2").replace(/\uE24C\uE24C/g, "\u1822").replace(/[\uE24C\uE24D]/g, "\u1822").replace(/[\uE250\uE256]/g, "\u182a").replace(/[\uE251-\uE253]/g, "\u1828").replace(/[\uE254\uE255]/g, "\u1829").replace(/[\uE25D\uE262]/g, "\u182b").replace(/\uE263/g, "\u182c").replace(/[\uE264\uE270]([\u1820-\u1827])/g, "\u182c$1").replace(/[\uE264\uE265\uE26C-\uE270]/g, "\u182d").replace(/[\uE271-\uE273]/g, "\u182e").replace(/[\uE274-\uE276]/g, "\u182f").replace(/[\uE277-\uE279]/g, "\u1830").replace(/[\uE27A-\uE27C]/g, "\u1831").replace(/[\uE27D\uE27E]/g, "\u1832").replace(/\uE27F/g, "\u1834").replace(/\uE280/g, "\u1835").replace(/\uE281/g, "\u1836").replace(/\uE282/g, "\u183f").replace(/[\uE283\uE284]/g, "\u1837");
    r = r.replace(/\uE23D/g, "\uff1f").replace(/\uE23A/g, "\u1804").replace(/\uE235/g, "\uff01").replace(/\uE237/g, "\u1801").replace(/\uE238/g, "\u1802").replace(/\uE239/g, "\u1803").replace(/[\uE243\uE244]/g, "\u180a").replace(/\uE245/g, "")
  }
  r = r.replace(/([\u182C\u182D])\u1820(\u1820(?:\s|$))/g, "$1$2").replace(/\s([\u1824\u1826\u1822](?:\s|$))/g, "\u202f$1").replace(/\s([\u1832\u1833\u1834][\u1824\u1826](?:\s|$))/g, "\u202f$1").replace(/\s((\u1836\u1822)|[\u1824\u1826]\u1828(?:\s|$))/g, "\u202f$1").replace(/\s([\u1828\u1836]|(\u1832[\u1820\u1821])\u1822(?:\s|$))/g, "\u202f$1").replace(/\s([\u1820\u1821]\u1834[\u1820\u1821](?:\s|$))/g, "\u202f$1").replace(/\s((\u1822\u1836)|\u182A[\u1820\u1821][\u1828\u1837](?:\s|$))/g, "\u202f$1");
  return r
}