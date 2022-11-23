let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
     vietnamese: {

          
          
          
          
          
          
          <form action="/predict" method= "post">
          
          
            
          
          
          
          
          
          
          
          
          
          
          
          
             
          
          
              <p id="pos"> Bạn thường kết được nhiều bạn mới.<br>
          
          
                 <input type = "radio" name="question1" value = -3 >-3
          
          
                 <input type = "radio" name="question1" value = -2 >-2
          
          
                 <input type = "radio" name="question1" value = -1 >-1
          
          
                 <input type = "radio" name="question1" value = 0 >0
          
          
                 <input type = "radio" name="question1" value = 1 >1
          
          
                 <input type = "radio" name="question1" value = 2 >2
          
          
                 <input type = "radio" name="question1" value = 3>3
          
          
               
          
          
             </p>
          
          
          
          
          
          
          
             <p id="pos"> Bạn dành nhiều thời gian để khám phá những chủ đề tuy mới lạ nhưng khơi gợi cho bạn nhiều hứng thú.<br>
          
          
                 <input type = "radio" name="question2" value = -3 >-3
          
          
                 <input type = "radio" name="question2" value = -2 >-2
          
          
                 <input type = "radio" name="question2" value = -1 >-1
          
          
                 <input type = "radio" name="question2" value = 0 >0
          
          
                 <input type = "radio" name="question2" value = 1 >1
          
          
                 <input type = "radio" name="question2" value = 2 >2
          
          
                 <input type = "radio" name="question2" value = 3 >3
          
          
             </p>
          
          
            
          
          
            
          
          
             <p id="pos"> Bạn cảm thấy mủi lòng khi nhìn người khác bật khóc.<br>
          
          
                 <input type = "radio" name="question3" value = -3 >-3
          
          
                 <input type = "radio" name="question3" value = -2 >-2
          
          
                 <input type = "radio" name="question3" value = -1 >-1
          
          
                 <input type = "radio" name="question3" value = 0 >0
          
          
                 <input type = "radio" name="question3" value = 1 >1
          
          
                 <input type = "radio" name="question3" value = 2 >2
          
          
                 <input type = "radio" name="question3" value = 3 >3
          
          
             </p>
          
          
             <p id="pos"> Bạn thường chuẩn bị chu đáo những kế hoạch dự phòng.<br>
          
          
                 <input type = "radio" name="question4" value = -3 >-3
          
          
                 <input type = "radio" name="question4" value = -2 >-2
          
          
                 <input type = "radio" name="question4" value = -1 >-1
          
          
                 <input type = "radio" name="question4" value = 0 >0
          
          
                 <input type = "radio" name="question4" value = 1 >1
          
          
                 <input type = "radio" name="question4" value = 2 >2
          
          
                 <input type = "radio" name="question4" value = 3 >3 
          
          
             </p>
          
          
            
          
          
             <p id="pos"> Bạn luôn giữ được sự bình tĩnh kể cả khi chịu đựng áp lực lớn.<br>
          
          
                 <input type = "radio" name="question5" value = -3 >-3
          
          
                 <input type = "radio" name="question5" value = -2 >-2
          
          
                 <input type = "radio" name="question5" value = -1 >-1
          
          
                 <input type = "radio" name="question5" value = 0 >0
          
          
                 <input type = "radio" name="question5" value = 1 >1
          
          
                 <input type = "radio" name="question5" value = 2 >2
          
          
                 <input type = "radio" name="question5" value = 3 >3
          
          
             </p>
          
          
            
          
          
             <p id="pos"> Ở những sự kiện lớn, bạn thường chủ động nói chuyện với những người quen thay vì giới thiệu bản thân với những người xa lạ.
          
          
                 <br>
          
          
                 <input type = "radio" name="question6" value = -3 >-3
          
          
                 <input type = "radio" name="question6" value = -2 >-2
          
          
                 <input type = "radio" name="question6" value = -1>-1
          
          
                 <input type = "radio" name="question6" value = 0 >0
          
          
                 <input type = "radio" name="question6" value = 1>1
          
          
                 <input type = "radio" name="question6" value = 2>2
          
          
                 <input type = "radio" name="question6" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn luôn ưu tiên hoàn thành việc đang làm trước khi bắt đầu một việc mới.<br>
          
          
                 <input type = "radio" name="question7" value = -3 >-3
          
          
                 <input type = "radio" name="question7" value = -2 >-2
          
          
                 <input type = "radio" name="question7" value = -1>-1
          
          
                 <input type = "radio" name="question7" value = 0>0
          
          
                 <input type = "radio" name="question7" value = 1>1
          
          
                 <input type = "radio" name="question7" value = 2>2
          
          
                 <input type = "radio" name="question7" value = 3>3 
          
          
             </p>
          
          
             <p id="pos">Bạn là một người rất đa cảm.
          
          
                 <br>
          
          
                 <input type = "radio" name="question8" value = -3 >-3
          
          
                 <input type = "radio" name="question8" value = -2 >-2
          
          
                 <input type = "radio" name="question8" value = -1 >-1
          
          
                 <input type = "radio" name="question8" value = 0>0
          
          
                 <input type = "radio" name="question8" value = 1>1
          
          
                 <input type = "radio" name="question8" value = 2>2
          
          
                 <input type = "radio" name="question8" value = 3>3
          
          
             </p>
          
          
             <p id="pos">Bạn thích việc sử dụng những công cụ hỗ trợ tổ chúc và sắp xếp, ví dụ như thời khóa biểu, danh sách.<br>
          
          
                 <input type = "radio" name="question9" value = -3>-3
          
          
                 <input type = "radio" name="question9" value = -2 >-2
          
          
                 <input type = "radio" name="question9" value = -1>-1
          
          
                 <input type = "radio" name="question9" value = 0>0
          
          
                 <input type = "radio" name="question9" value = 1>1
          
          
                 <input type = "radio" name="question9" value = 2>2
          
          
                 <input type = "radio" name="question9" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Việc mắc một lỗi nhỏ cũng khiến bạn hoài nghi về năng lực và kiến thức của bản thân.
          
          
                 <br>
          
          
                 <input type = "radio" name="question10" value = -3 >-3
          
          
                 <input type = "radio" name="question10" value = -2 >-2
          
          
                 <input type = "radio" name="question10" value = -1>-1
          
          
                 <input type = "radio" name="question10" value = 0>0
          
          
                 <input type = "radio" name="question10" value = 1>1
          
          
                 <input type = "radio" name="question10" value = 2>2
          
          
                 <input type = "radio" name="question10" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn cảm thấy thoải mái với việc bắt chuyện với những người có cùng sở thích.
          
          
                 <br>
          
          
                 <input type = "radio" name="question11" value = -3 >-3
          
          
                 <input type = "radio" name="question11" value = -2 >-2
          
          
                 <input type = "radio" name="question11" value = -1>-1
          
          
                 <input type = "radio" name="question11" value = 0>0
          
          
                 <input type = "radio" name="question11" value = 1>1
          
          
                 <input type = "radio" name="question11" value = 2>2
          
          
                 <input type = "radio" name="question11" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> You are not too interested in discussing various interpretations and analyses of creative works.<br>
          
          
                 <input type = "radio" name="question12" value = -3>-3
          
          
                 <input type = "radio" name="question12" value = -2>-2
          
          
                 <input type = "radio" name="question12" value = -1>-1
          
          
                 <input type = "radio" name="question12" value = 0>0
          
          
                 <input type = "radio" name="question12" value = 1>1
          
          
                 <input type = "radio" name="question12" value = 2>2
          
          
                 <input type = "radio" name="question12" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn luôn đặt lý trí lên trước cảm xúc cá nhân.<br>
          
          
                 <input type = "radio" name="question13" value = -3>-3
          
          
                 <input type = "radio" name="question13" value = -2>-2
          
          
                 <input type = "radio" name="question13" value = -1>-1
          
          
                 <input type = "radio" name="question13" value = 0>0
          
          
                 <input type = "radio" name="question13" value = 1>1
          
          
                 <input type = "radio" name="question13" value = 2>2
          
          
                 <input type = "radio" name="question13" value = 3>3
          
          
             </p>
          
          
            
          
          
             <p id="pos">Bạn yêu thích làm những công việc dựa vào cảm xúc hiện tại hơn là đặt ra những kế hoạch lâu dài.
          
          
                 <br>
          
          
                 <input type = "radio" name="question14" value = -3>-3
          
          
                 <input type = "radio" name="question14" value = -2>-2
          
          
                 <input type = "radio" name="question14" value = -1>-1
          
          
                 <input type = "radio" name="question14" value = 0>0
          
          
                 <input type = "radio" name="question14" value = 1>1
          
          
                 <input type = "radio" name="question14" value = 2>2
          
          
                 <input type = "radio" name="question14" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn ít khi quan tâm đến ấn tượng đầu tiên của bản thân đối với người mới gặp.
          
          
                 <br>
          
          
                 <input type = "radio" name="question15" value = -3>-3
          
          
                 <input type = "radio" name="question15" value = -2>-2
          
          
                 <input type = "radio" name="question15" value = -1>-1
          
          
                 <input type = "radio" name="question15" value = 0>0
          
          
                 <input type = "radio" name="question15" value = 1>1
          
          
                 <input type = "radio" name="question15" value = 2>2
          
          
                 <input type = "radio" name="question15" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn yêu thích việc tham gia các hoạt động nhóm.
          
          
                 <br>
          
          
                 <input type = "radio" name="question16" value = -3>-3
          
          
                 <input type = "radio" name="question16" value = -2>-2
          
          
                 <input type = "radio" name="question16" value = -1>-1
          
          
                 <input type = "radio" name="question16" value = 0>0
          
          
                 <input type = "radio" name="question16" value = 1>1
          
          
                 <input type = "radio" name="question16" value = 2>2
          
          
                 <input type = "radio" name="question16" value = 3>3
          
          
             </p>
          
          
            
          
          
             <p id="pos"> Bạn thích những quyển sách hay những bộ phim khiến bạn đặt ra những suy nghĩ ở đoạn kết..<br>
          
          
                 <input type = "radio" name="question17" value = -3>-3
          
          
                 <input type = "radio" name="question17" value = -2>-2
          
          
                 <input type = "radio" name="question17" value = -1>-1
          
          
                 <input type = "radio" name="question17" value = 0>0
          
          
                 <input type = "radio" name="question17" value = 1>1
          
          
                 <input type = "radio" name="question17" value = 2>2
          
          
                 <input type = "radio" name="question17" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Việc giúp đỡ người khác đạt được những thành tựu khiến bạn cảm thấy hạnh phúc hơn việc bản thân đạt được những thành tựu..
          
          
                 <br>
          
          
                 <input type = "radio" name="question18" value = -3>-3
          
          
                 <input type = "radio" name="question18" value = -2>-2
          
          
                 <input type = "radio" name="question18" value = -1>-1
          
          
                 <input type = "radio" name="question18" value = 0>0
          
          
                 <input type = "radio" name="question18" value = 1>1
          
          
                 <input type = "radio" name="question18" value = 2>2
          
          
                 <input type = "radio" name="question18" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn có quá nhiều sở thích và chúng làm bạn khó đưa ra lựa chọn sẽ làm thử gì tiếp theo.
          
          
                 <br>
          
          
                 <input type = "radio" name="question19" value = -3>-3
          
          
                 <input type = "radio" name="question19" value = -2>-2
          
          
                 <input type = "radio" name="question19" value = -1>-1
          
          
                 <input type = "radio" name="question19" value = 0>0
          
          
                 <input type = "radio" name="question19" value = 1>1
          
          
                 <input type = "radio" name="question19" value = 2>2
          
          
                 <input type = "radio" name="question19" value = 3>3
          
          
             </p>
          
          
            
          
          
             <p id="pos">Bạn dễ bị lo lắng về những việc có thể trở nên tệ hơn.
          
          
                 <br>
          
          
                 <input type = "radio" name="question20" value = -3>-3
          
          
                 <input type = "radio" name="question20" value = -2>-2
          
          
                 <input type = "radio" name="question20" value = -1>-1
          
          
                 <input type = "radio" name="question20" value = 0>0
          
          
                 <input type = "radio" name="question20" value = 1>1
          
          
                 <input type = "radio" name="question20" value = 2>2
          
          
                 <input type = "radio" name="question20" value = 3>3 
          
          
             </p>
          
          
             <p id="pos"> Bạn thường tránh vai trò lãnh đạo trong nhóm.<br>
          
          
                 <input type = "radio" name="question21" value = -3>-3
          
          
                 <input type = "radio" name="question21" value = -2>-2
          
          
                 <input type = "radio" name="question21" value = -1>-1
          
          
                 <input type = "radio" name="question21" value = 0>0
          
          
                 <input type = "radio" name="question21" value = 1>1
          
          
                 <input type = "radio" name="question21" value = 2>2
          
          
                 <input type = "radio" name="question21" value = 3>3
          
          
             </p>
          
          
            
          
          
             <p id="pos"> Bạn chắc chắn không phải là một người giỏi hội họa.
          
          
                 <br>
          
          
                 <input type = "radio" name="question22" value = -3>-3
          
          
                 <input type = "radio" name="question22" value = -2>-2
          
          
                 <input type = "radio" name="question22" value = -1>-1
          
          
                 <input type = "radio" name="question22" value = 0>0
          
          
                 <input type = "radio" name="question22" value = 1>1
          
          
                 <input type = "radio" name="question22" value = 2>2
          
          
                 <input type = "radio" name="question22" value = 3>3
          
          
             </p>
          
          
              
          
          
             <p id="pos"> Bạn quan niệm rằng thế giới sẽ tốt hơn mọi người dựa vào lý trí hơn là cảm xúc.<br>
          
          
                 <input type = "radio" name="question23" value = -3>-3
          
          
                 <input type = "radio" name="question23" value = -2>-2
          
          
                 <input type = "radio" name="question23" value = -1>-1
          
          
                 <input type = "radio" name="question23" value = 0>0
          
          
                 <input type = "radio" name="question23" value = 1>1
          
          
                 <input type = "radio" name="question23" value = 2>2
          
          
                 <input type = "radio" name="question23" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn lựa chọn hoàn thành việc nhà trước khi nghỉ ngơi.
          
          
                 <br>
          
          
                 <input type = "radio" name="question24" value = -3>-3
          
          
                 <input type = "radio" name="question24" value = -2>-2
          
          
                 <input type = "radio" name="question24" value = -1>-1
          
          
                 <input type = "radio" name="question24" value = 0>0
          
          
                 <input type = "radio" name="question24" value = 1>1
          
          
                 <input type = "radio" name="question24" value = 2>2
          
          
                 <input type = "radio" name="question24" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn thích xem người khác tranh luận.
          
          
                 <br>
          
          
                 <input type = "radio" name="question25" value = -3 >-3
          
          
                 <input type = "radio" name="question25" value = -2>-2
          
          
                 <input type = "radio" name="question25" value = -1>-1
          
          
                 <input type = "radio" name="question25" value = 0>0
          
          
                 <input type = "radio" name="question25" value = 1>1
          
          
                 <input type = "radio" name="question25" value = 2>2
          
          
                 <input type = "radio" name="question25" value = 3>3
          
          
             </p>
          
          
              
          
          
             <p id="pos">Bạn có khuynh hướng tránh việc thu hút sự chú ý.<br>
          
          
                 <input type = "radio" name="question26" value = -3>-3
          
          
                 <input type = "radio" name="question26" value = -2>-2
          
          
                 <input type = "radio" name="question26" value = -1>-1
          
          
                 <input type = "radio" name="question26" value = 0>0
          
          
                 <input type = "radio" name="question26" value = 1>1
          
          
                 <input type = "radio" name="question26" value = 2>2
          
          
                 <input type = "radio" name="question26" value = 3>3
          
          
             </p>
          
          
            
          
          
             <p id="pos">Tâm trạng của bạn dễ bị thay đổi.<br>
          
          
                 <input type = "radio" name="question27" value = -3>-3
          
          
                 <input type = "radio" name="question27" value = -2>-2
          
          
                 <input type = "radio" name="question27" value = -1>-1
          
          
                 <input type = "radio" name="question27" value = 0>0
          
          
                 <input type = "radio" name="question27" value = 1>1
          
          
                 <input type = "radio" name="question27" value = 2>2
          
          
                 <input type = "radio" name="question27" value = 3>3
          
          
             </p>
          
          
             <p id="pos"> Bạn dễ mất kiên nhẫn với những người làm việc không hiệu quả bằng bạn.<br>
          
          
                 <input type = "radio" name="question28" value = -3>-3
          
          
                 <input type = "radio" name="question28" value = -2 >-2
          
          
                 <input type = "radio" name="question28" value = -1>-v1
          
          
                 <input type = "radio" name="question28" value = 0 >0
          
          
                 <input type = "radio" name="question28" value = 1 >1
          
          
                 <input type = "radio" name="question28" value = 2 >2
          
          
                 <input type = "radio" name="question28" value = 3 >3
          
          
             </p>
          
          
            
          
          
             <p id="pos"> Bạn thường hoàn thành công việc ở thời điểm sát nút.
          
          
                 <br>
          
          
                 <input type = "radio" name="question29">-3
          
          
                 <input type = "radio" name="question29" value = -2 >-2
          
          
                 <input type = "radio" name="question29" value = -1 >-1
          
          
                 <input type = "radio" name="question29" value = 0 >0
          
          
                 <input type = "radio" name="question29" value = 1 >1
          
          
                 <input type = "radio" name="question29" value = 2 >2
          
          
                 <input type = "radio" name="question29" value = 3 >3 
          
          
             </p>
          
          
          
          
          
          
             <p id="neg">Bạn luôn băn khoăn về những câu hỏi về việc gì sẽ diễn ra sau cái chết.
          
          
                 <br>
          
          
                 <input type = "radio" name="question30" value = -3 >-3
          
          
                 <input type = "radio" name="question30" value = -2 >-2
          
          
                 <input type = "radio" name="question30" value = -1 >-1
          
          
                 <input type = "radio" name="question30" value = 0 >0
          
          
                 <input type = "radio" name="question30" value = 1 >1
          
          
                 <input type = "radio" name="question30" value = 2 >2
          
          
                 <input type = "radio" name="question30" value = 3 >3
          
          
             </p>
          
          
             <p id="neg"> Bạn thích việc ở gần người khác hơn là ở một mình.
          
          
                 <br>
          
          
                 <input type = "radio" name="question31" value = -3 >-3
          
          
                 <input type = "radio" name="question31" value = -2 >-2
          
          
                 <input type = "radio" name="question31" value = -1 >-1
          
          
                 <input type = "radio" name="question31" value = 0 >0
          
          
                 <input type = "radio" name="question31" value = 1 >1
          
          
                 <input type = "radio" name="question31" value = 2 >2
          
          
                 <input type = "radio" name="question31" value = 3 >3
          
          
             </p>
          
          
             <p id="neg"> Việc vấn đề tranh luận trở nên quá lý thuyết khiến bạn cảm thấy buồn chán và mất hết hứng thú.<br>
          
          
                 <input type = "radio" name="question32" value = -3 >-3
          
          
                 <input type = "radio" name="question32" value = -2 >-2
          
          
                  <input type = "radio" name="question32" value = -1 >-1
          
          
                  <input type = "radio" name="question32" value = 0 >0
          
          
                  <input type = "radio" name="question32" value = 1 >1
          
          
             <input type = "radio" name="question32" value = 2 >2
          
          
             <input type = "radio" name="question32" value = 3 >3
          
          
             </p>
          
          
             <p id="neg">Bạn cảm thấy dễ dàng đồng cảm với những người có trải nghiệm hoàn toàn khác bạn.<br>
          
          
                 <input type = "radio" name="question33" value = -3 >-3
          
          
                 <input type = "radio" name="question33" value = -2 >-2
          
          
                 <input type = "radio" name="question33" value = -1 >-1
          
          
                 <input type = "radio" name="question33" value = 0 >0
          
          
                 <input type = "radio" name="question33" value = 1 >1
          
          
                 <input type = "radio" name="question33" value = 2 >2
          
          
                 <input type = "radio" name="question33" value = 3 >3 </p>
          
          
          
          
          
          
          
           <p id="neg"> Bạn thường xuyên trì hoãn việc đưa ra lựa chọn cuối cùng.<br>
          
          
             <input type = "radio" name="question34" value = -3 >-3
          
          
             <input type = "radio" name="question34" value = -2 >-2
          
          
             <input type = "radio" name="question34" value = -1 >-1
          
          
             <input type = "radio" name="question34" value = 0 >0
          
          
             <input type = "radio" name="question34" value = 1 >1
          
          
             <input type = "radio" name="question34" value = 2 >2
          
          
             <input type = "radio" name="question34" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> You rarely second-guess the choices that you have made.<br>
          
          
                     <input type = "radio" name="question35" value = -3 >-3
          
          
                     <input type = "radio" name="question35" value = -2 >-2
          
          
                     <input type = "radio" name="question35" value = -1 >-1
          
          
                     <input type = "radio" name="question35" value = 0 >0
          
          
                     <input type = "radio" name="question35" value = 1 >1
          
          
                     <input type = "radio" name="question35" value = 2 >2
          
          
                     <input type = "radio" name="question35" value = 3 >3
          
          
                 </p>
          
          
          
          
          
          
          
                
          
          
                 <p id="pos">Những gì bạn cần sau một tuần dài mệt mỏi là những sự kiện sôi động, náo nhiệt.<br>
          
          
                     <input type = "radio" name="question36" value = -3 >-3
          
          
                     <input type = "radio" name="question36" value = -2 >-2
          
          
                     <input type = "radio" name="question36" value = -1 >-1
          
          
                     <input type = "radio" name="question36" value = 0 >0
          
          
                     <input type = "radio" name="question36" value = 1 >1
          
          
                     <input type = "radio" name="question36" value = 2 >2
          
          
                     <input type = "radio" name="question36" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn thường cảm thấy bị choáng ngợp .<br>
          
          
                     <input type = "radio" name="question37" value = -3 >-3
          
          
                     <input type = "radio" name="question37" value = -2 >-2
          
          
                     <input type = "radio" name="question37" value = -1 >-1
          
          
                     <input type = "radio" name="question37" value = 0 >0
          
          
                     <input type = "radio" name="question37" value = 1 >1
          
          
                     <input type = "radio" name="question37" value = 2 >2
          
          
                     <input type = "radio" name="question37" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg">Bạn thường gặp khó khăn trong việc thấu hiểu cảm xúc của người khác.<br>
          
          
                     <input type = "radio" name="question38" value = -3 >-3
          
          
                     <input type = "radio" name="question38" value = -2 >-2
          
          
                     <input type = "radio" name="question38" value = -1 >-1
          
          
                     <input type = "radio" name="question38" value = 0 >0
          
          
                     <input type = "radio" name="question38" value = 1 >1
          
          
                     <input type = "radio" name="question38" value = 2 >2
          
          
                     <input type = "radio" name="question38" value = 3 >3
          
          
                 </p>      
          
          
                 <p id="neg"> Bạn thích việc đặt ra những danh sách công việc cần làm hằng ngày.<br>
          
          
                     <input type = "radio" name="question39" value = -3 >-3
          
          
                     <input type = "radio" name="question39" value = -2 >-2
          
          
                     <input type = "radio" name="question39" value = -1 >-1
          
          
                     <input type = "radio" name="question39" value = 0 >0
          
          
                     <input type = "radio" name="question39" value = 1 >1
          
          
                     <input type = "radio" name="question39" value = 2 >2
          
          
                     <input type = "radio" name="question39" value = 3 >3 </p>
          
          
                     <p id="neg">Bạn ít khi cảm thấy tự ti và hoài nghi về khả năng của bản thân.
          
          
                         <br>
          
          
                         <input type = "radio" name="question40" value = -3 >-3
          
          
                         <input type = "radio" name="question40" value = -2 >-2
          
          
                         <input type = "radio" name="question40" value = -1 >-1
          
          
                         <input type = "radio" name="question40" value = 0 >0
          
          
                         <input type = "radio" name="question40" value = 1 >1
          
          
                         <input type = "radio" name="question40" value = 2 >2
          
          
                         <input type = "radio" name="question40" value = 3 >3
          
          
                     </p>
          
          
                     <p id="neg"> Bạn thường tránh việc gọi điện.
          
          
                         <br>
          
          
                         <input type = "radio" name="question41" value = -3 >-3
          
          
                         <input type = "radio" name="question41" value = -2 >-2
          
          
                         <input type = "radio" name="question41" value = -1 >-1
          
          
                         <input type = "radio" name="question41" value = 0 >0
          
          
                         <input type = "radio" name="question41" value = 1 >1
          
          
                         <input type = "radio" name="question41" value = 2 >2
          
          
                         <input type = "radio" name="question41" value = 3 >3
          
          
                     </p>
          
          
                     <p id="neg"> Bạn dành khá nhiều thời gian để thử nghiệm những góc nhìn khác hoàn toàn với góc nhìn của bản thân.
          
          
                         <br>
          
          
                         <input type = "radio" name="question42" value = -3 >-3
          
          
                         <input type = "radio" name="question42" value = -2 >-2
          
          
                         <input type = "radio" name="question42" value = -1 >-1
          
          
                         <input type = "radio" name="question42" value = 0 >0
          
          
                         <input type = "radio" name="question42" value = 1 >1
          
          
                         <input type = "radio" name="question42" value = 2 >2
          
          
                         <input type = "radio" name="question42" value = 3 >3
          
          
                     </p>
          
          
                     <p id="neg"> Bạn thường là người chủ động liên hệ với người khác cũng như bắt đầu những hoạt động.
          
          
                         <br>
          
          
                         <input type = "radio" name="question43" value = -3 >-3
          
          
                         <input type = "radio" name="question43" value = -2 >-2
          
          
                         <input type = "radio" name="question43" value = -1 >-1
          
          
                         <input type = "radio" name="question43" value = 0 >0
          
          
                         <input type = "radio" name="question43" value = 1 >1
          
          
                         <input type = "radio" name="question43" value = 2 >2
          
          
                         <input type = "radio" name="question43" value = 3 >3
          
          
                     </p>
          
          
                 </p>
          
          
                 <p id="neg">Khi kế hoạch không như dự tính, ưu tiên hàng đầu của bạn là đưa mọi việc trở về đúng với kế hoạch ban đầu càng sớm càng tố.
          
          
                     <br>
          
          
                     <input type = "radio" name="question44" value = -3 >-3
          
          
                     <input type = "radio" name="question44" value = -2 >-2
          
          
                     <input type = "radio" name="question44" value = -1 >-1
          
          
                     <input type = "radio" name="question44" value = 0 >0
          
          
                     <input type = "radio" name="question44" value = 1 >1
          
          
                     <input type = "radio" name="question44" value = 2 >2
          
          
                     <input type = "radio" name="question44" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn vẫn còn để tâm những lỗi sai trong quá khứ.
          
          
                     <br>
          
          
                     <input type = "radio" name="question45" value = -3 >-3
          
          
                     <input type = "radio" name="question45" value = -2 >-2
          
          
                     <input type = "radio" name="question45" value = -1 >-1
          
          
                     <input type = "radio" name="question45" value = 0 >0
          
          
                     <input type = "radio" name="question45" value = 1 >1
          
          
                     <input type = "radio" name="question45" value = 2 >2
          
          
                     <input type = "radio" name="question45" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn ít khi để tâm về lý do con người tồn tại cũng như ý nghĩa của cuộc sống.
          
          
                     <br>
          
          
                     <input type = "radio" name="question46" value = -3 >-3
          
          
                     <input type = "radio" name="question46" value = -2 >-2
          
          
                     <input type = "radio" name="question46" value = -1 >-1
          
          
                     <input type = "radio" name="question46" value = 0 >0
          
          
                     <input type = "radio" name="question46" value = 1 >1
          
          
                     <input type = "radio" name="question46" value = 2 >2
          
          
                     <input type = "radio" name="question46" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn bị cảm xúc chi phối hơn là bạn chi phối chúng.<br>
          
          
                     <input type = "radio" name="question47" value = -3 >-3
          
          
                     <input type = "radio" name="question47" value = -2 >-2
          
          
                     <input type = "radio" name="question47" value = -1 >-1
          
          
                     <input type = "radio" name="question47" value = 0 >0
          
          
                     <input type = "radio" name="question47" value = 1 >1
          
          
                     <input type = "radio" name="question47" value = 2 >2
          
          
                     <input type = "radio" name="question47" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn luôn cố gắng giữ hình tượng cho người khác kể cả khi đó là lỗi của họ.<br>
          
          
                     <input type = "radio" name="question48" value = -3 >-3
          
          
                     <input type = "radio" name="question48" value = -2 >-2
          
          
                     <input type = "radio" name="question48" value = -1 >-1
          
          
                     <input type = "radio" name="question48" value = 0 >0
          
          
                     <input type = "radio" name="question48" value = 1 >1
          
          
                     <input type = "radio" name="question48" value = 2 >2
          
          
                     <input type="radio" name="question48" value=3>3
          
          
                 </p>
          
          
                 <p id="neg"> Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.<br>
          
          
                     <input type = "radio" name="question49" value = -3 >-3
          
          
                     <input type = "radio" name="question49" value = -2 >-2
          
          
                     <input type = "radio" name="question49" value = -1 >-1
          
          
                     <input type = "radio" name="question49" value = 0 >0
          
          
                     <input type = "radio" name="question49" value = 1 >1
          
          
                     <input type = "radio" name="question49" value = 2 >2
          
          
                     <input type = "radio" name="question49" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Khi được người khác đánh giá cao, bạn thường suy nghĩ xem khi nào thì bạn sẽ gây thất vọng cho họ.<br>
          
          
                     <input type = "radio" name="question50" value = -3 >-3
          
          
                     <input type = "radio" name="question50" value = -2 >-2
          
          
                     <input type = "radio" name="question50" value = -1 >-1
          
          
                     <input type = "radio" name="question50" value = 0 >0
          
          
                     <input type = "radio" name="question50" value = 1 >1
          
          
                     <input type = "radio" name="question50" value = 2 >2
          
          
                     <input type = "radio" name="question50" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn yêu thích những công việc hoạt động một mình trong hầu hết thời gian.<br>
          
          
                     <input type = "radio" name="question51" value = -3 >-3
          
          
                     <input type = "radio" name="question51" value = -2 >-2
          
          
                     <input type = "radio" name="question51" value = -1 >-1
          
          
                     <input type = "radio" name="question51" value = 0 >0
          
          
                     <input type = "radio" name="question51" value = 1 >1
          
          
                     <input type = "radio" name="question51" value = 2 >2
          
          
                     <input type = "radio" name="question51" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn tin rằng việc suy ngẫm về những câu hỏi triết học là phí thời gian.<br>
          
          
                     <input type = "radio" name="question52" value = -3 >-3
          
          
                     <input type = "radio" name="question52" value = -2 >-2
          
          
                     <input type = "radio" name="question52" value = -1 >-1
          
          
                     <input type = "radio" name="question52" value = 0 >0
          
          
                     <input type = "radio" name="question52" value = 1 >1
          
          
                     <input type = "radio" name="question52" value = 2 >2
          
          
                     <input type = "radio" name="question52" value = 3 >3
          
          
                 </p>
          
          
                
          
          
                 <p id="neg">Bạn yêu thích những nơi bận rộn, bùng nổ hơn là những nơi yên ắng, tính lặng.
          
          
                     <br>
          
          
                     <input type = "radio" name="question53" value = -3 >-3
          
          
                     <input type = "radio" name="question53" value = -2 >-2
          
          
                     <input type = "radio" name="question53" value = -1 >-1
          
          
                     <input type = "radio" name="question53" value = 0 >0
          
          
                     <input type = "radio" name="question53" value = 1 >1
          
          
                     <input type = "radio" name="question53" value = 2 >2
          
          
                     <input type = "radio" name="question53" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn có thể hiểu được cảm xúc của người khác ngay từ ánh nhìn đầu tiên.
          
          
                     <br>
          
          
                     <input type = "radio" name="question54" value = -3 >-3
          
          
                     <input type = "radio" name="question54" value = -2 >-2
          
          
                     <input type = "radio" name="question54" value = -1 >-1
          
          
                     <input type = "radio" name="question54" value = 0 >0
          
          
                     <input type = "radio" name="question54" value = 1 >1
          
          
                     <input type = "radio" name="question54" value = 2 >2
          
          
                     <input type = "radio" name="question54" value = 3 >3
          
          
                 </p> 
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
                 <p id="neg"> Bạn hoàn thành công việc một cách máy móc, không bỏ sót bất kỳ giai đoạn nào.
          
          
                     <br>
          
          
                     <input type = "radio" name="question56" value = -3 >-3
          
          
                     <input type = "radio" name="question56" value = -2 >-2
          
          
                     <input type = "radio" name="question56" value = -1 >-1
          
          
                     <input type = "radio" name="question56" value = 0 >0
          
          
                     <input type = "radio" name="question56" value = 1 >1
          
          
                     <input type = "radio" name="question56" value = 2 >2
          
          
                     <input type = "radio" name="question56" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn đặc biệt thích thú trước những thứ gắn liền với tranh luận.
          
          
                     <br>
          
          
                     <input type = "radio" name="question57" value = -3 >-3
          
          
                     <input type = "radio" name="question57" value = -2 >-2
          
          
                     <input type = "radio" name="question57" value = -1 >-1
          
          
                     <input type = "radio" name="question57" value = 0 >0
          
          
                     <input type = "radio" name="question57" value = 1 >1
          
          
                     <input type = "radio" name="question57" value = 2 >2
          
          
                     <input type = "radio" name="question57" value = 3 >3
          
          
                 </p>
          
          
                 <p id="neg"> Bạn sẵn sàng nhường lại cơ hội của bản thân cho những người thật sự cần nó.<br>
          
          
                     <input type = "radio" name="question58" value = -3 >-3
          
          
                     <input type = "radio" name="question58" value = -2 >-2
          
          
                     <input type = "radio" name="question58" value = -1 >-1
          
          
                     <input type = "radio" name="question58" value = 0 >0
          
          
                     <input type = "radio" name="question58" value = 1 >1
          
          
                     <input type = "radio" name="question58" value = 2 >2
          
          
                     <input type = "radio" name="question58" value = 3 >3
          
          
             </p>
          
          
             <p id="neg"> Bạn thường gặp khó khăn với hạn nộp.<br>
          
          
                     <input type = "radio" name="question59" value = -3 >-3
          
          
                     <input type = "radio" name="question59" value = -2 >-2
          
          
                     <input type = "radio" name="question59" value = -1 >-1
          
          
                     <input type = "radio" name="question59" value = 0 >0
          
          
                     <input type = "radio" name="question59" value = 1 >1
          
          
                     <input type = "radio" name="question59" value = 2 >2
          
          
                     <input type = "radio" name="question59" value = 3 >3
          
          
             </p>
          
          
             <p id="neg"> You feel confident that things will work out for you.<br>
          
          
                     <input type = "radio" name="question60" value = -3 >-3
          
          
                     <input type = "radio" name="question60" value = -2 >-2
          
          
                     <input type = "radio" name="question60" value = -1 >-1
          
          
                     <input type = "radio" name="question60" value = 0 >0
          
          
                     <input type = "radio" name="question60" value = 1 >1
          
          
                     <input type = "radio" name="question60" value = 2 >2
          
          
                     <input type = "radio" name="question60" value = 3 >3
          
          
             </p>
          
          
          
          
          
          
          
          <button type="submit" class="btn-submit" onclick=window.location.href="{{url_for('predict')}}">Submit</button>
          
          
          
          
          
          
          
          
          
          
          
          
          </form>
          
          
          
     }
     english: {
          description: "<form action="/predict" method= "post">
    


     
          <p id="pos"> You regularly make new friends.<br>
             <input type = "radio" name="question1" value = -3 >-3
             <input type = "radio" name="question1" value = -2 >-2
             <input type = "radio" name="question1" value = -1 >-1 
             <input type = "radio" name="question1" value = 0 >0
             <input type = "radio" name="question1" value = 1 >1
             <input type = "radio" name="question1" value = 2 >2 
             <input type = "radio" name="question1" value = 3>3 
            
         </p>
     
         <p id="pos"> You spend a lot of your free time exploring various random topics that pique your interest.<br>
             <input type = "radio" name="question2" value = -3 >-3
             <input type = "radio" name="question2" value = -2 >-2
             <input type = "radio" name="question2" value = -1 >-1 
             <input type = "radio" name="question2" value = 0 >0
             <input type = "radio" name="question2" value = 1 >1
             <input type = "radio" name="question2" value = 2 >2 
             <input type = "radio" name="question2" value = 3 >3 
         </p>
         
         
         <p id="pos"> Seeing other people cry can easily make you feel like you want to cry too<br>
             <input type = "radio" name="question3" value = -3 >-3
             <input type = "radio" name="question3" value = -2 >-2
             <input type = "radio" name="question3" value = -1 >-1 
             <input type = "radio" name="question3" value = 0 >0
             <input type = "radio" name="question3" value = 1 >1
             <input type = "radio" name="question3" value = 2 >2 
             <input type = "radio" name="question3" value = 3 >3 
         </p>
         <p id="pos"> You often make a backup plan for a backup plan.<br>
             <input type = "radio" name="question4" value = -3 >-3 
             <input type = "radio" name="question4" value = -2 >-2 
             <input type = "radio" name="question4" value = -1 >-1 
             <input type = "radio" name="question4" value = 0 >0 
             <input type = "radio" name="question4" value = 1 >1
             <input type = "radio" name="question4" value = 2 >2 
             <input type = "radio" name="question4" value = 3 >3  
         </p>
         
         <p id="pos"> You usually stay calm, even under a lot of pressure.<br>
             <input type = "radio" name="question5" value = -3 >-3 
             <input type = "radio" name="question5" value = -2 >-2 
             <input type = "radio" name="question5" value = -1 >-1 
             <input type = "radio" name="question5" value = 0 >0 
             <input type = "radio" name="question5" value = 1 >1
             <input type = "radio" name="question5" value = 2 >2 
             <input type = "radio" name="question5" value = 3 >3 
         </p>
         
         <p id="pos"> At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.
             <br>
             <input type = "radio" name="question6" value = -3 >-3 
             <input type = "radio" name="question6" value = -2 >-2 
             <input type = "radio" name="question6" value = -1>-1 
             <input type = "radio" name="question6" value = 0 >0 
             <input type = "radio" name="question6" value = 1>1
             <input type = "radio" name="question6" value = 2>2 
             <input type = "radio" name="question6" value = 3>3 
         </p>
         <p id="pos"> You prefer to completely finish one project before starting another.<br>
             <input type = "radio" name="question7" value = -3 >-3 
             <input type = "radio" name="question7" value = -2 >-2 
             <input type = "radio" name="question7" value = -1>-1 
             <input type = "radio" name="question7" value = 0>0 
             <input type = "radio" name="question7" value = 1>1
             <input type = "radio" name="question7" value = 2>2 
             <input type = "radio" name="question7" value = 3>3  
         </p>
         <p id="pos">You are very sentimental.
             <br>
             <input type = "radio" name="question8" value = -3 >-3 
             <input type = "radio" name="question8" value = -2 >-2 
             <input type = "radio" name="question8" value = -1 >-1 
             <input type = "radio" name="question8" value = 0>0 
             <input type = "radio" name="question8" value = 1>1
             <input type = "radio" name="question8" value = 2>2 
             <input type = "radio" name="question8" value = 3>3 
         </p>
         <p id="pos">You like to use organizing tools like schedules and lists.<br>
             <input type = "radio" name="question9" value = -3>-3 
             <input type = "radio" name="question9" value = -2 >-2 
             <input type = "radio" name="question9" value = -1>-1 
             <input type = "radio" name="question9" value = 0>0 
             <input type = "radio" name="question9" value = 1>1
             <input type = "radio" name="question9" value = 2>2 
             <input type = "radio" name="question9" value = 3>3 
         </p>
         <p id="pos"> Even a small mistake can cause you to doubt your overall abilities and knowledge.
             <br>
             <input type = "radio" name="question10" value = -3 >-3 
             <input type = "radio" name="question10" value = -2 >-2 
             <input type = "radio" name="question10" value = -1>-1 
             <input type = "radio" name="question10" value = 0>0 
             <input type = "radio" name="question10" value = 1>1
             <input type = "radio" name="question10" value = 2>2 
             <input type = "radio" name="question10" value = 3>3 
         </p>
         <p id="pos"> You feel comfortable just walking up to someone you find interesting and striking up a conversation.
             <br>
             <input type = "radio" name="question11" value = -3 >-3 
             <input type = "radio" name="question11" value = -2 >-2 
             <input type = "radio" name="question11" value = -1>-1 
             <input type = "radio" name="question11" value = 0>0 
             <input type = "radio" name="question11" value = 1>1
             <input type = "radio" name="question11" value = 2>2 
             <input type = "radio" name="question11" value = 3>3 
         </p>
         <p id="pos"> You are not too interested in discussing various interpretations and analyses of creative works.<br>
             <input type = "radio" name="question12" value = -3>-3 
             <input type = "radio" name="question12" value = -2>-2 
             <input type = "radio" name="question12" value = -1>-1 
             <input type = "radio" name="question12" value = 0>0 
             <input type = "radio" name="question12" value = 1>1
             <input type = "radio" name="question12" value = 2>2 
             <input type = "radio" name="question12" value = 3>3 
         </p>
         <p id="pos"> You are more inclined to follow your head than your heart.<br>
             <input type = "radio" name="question13" value = -3>-3 
             <input type = "radio" name="question13" value = -2>-2 
             <input type = "radio" name="question13" value = -1>-1 
             <input type = "radio" name="question13" value = 0>0 
             <input type = "radio" name="question13" value = 1>1
             <input type = "radio" name="question13" value = 2>2 
             <input type = "radio" name="question13" value = 3>3 
         </p>
         
         <p id="pos">You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.
             <br>
             <input type = "radio" name="question14" value = -3>-3 
             <input type = "radio" name="question14" value = -2>-2 
             <input type = "radio" name="question14" value = -1>-1 
             <input type = "radio" name="question14" value = 0>0 
             <input type = "radio" name="question14" value = 1>1
             <input type = "radio" name="question14" value = 2>2 
             <input type = "radio" name="question14" value = 3>3 
         </p>
         <p id="pos"> You rarely worry about whether you make a good impression on people you meet.
             <br>
             <input type = "radio" name="question15" value = -3>-3 
             <input type = "radio" name="question15" value = -2>-2 
             <input type = "radio" name="question15" value = -1>-1 
             <input type = "radio" name="question15" value = 0>0 
             <input type = "radio" name="question15" value = 1>1
             <input type = "radio" name="question15" value = 2>2 
             <input type = "radio" name="question15" value = 3>3 
         </p>
         <p id="pos"> You enjoy participating in group activities.
             <br>
             <input type = "radio" name="question16" value = -3>-3 
             <input type = "radio" name="question16" value = -2>-2 
             <input type = "radio" name="question16" value = -1>-1 
             <input type = "radio" name="question16" value = 0>0 
             <input type = "radio" name="question16" value = 1>1
             <input type = "radio" name="question16" value = 2>2 
             <input type = "radio" name="question16" value = 3>3 
         </p>
         
         <p id="pos"> You like books and movies that make you come up with your own interpretation of the ending.<br>
             <input type = "radio" name="question17" value = -3>-3 
             <input type = "radio" name="question17" value = -2>-2 
             <input type = "radio" name="question17" value = -1>-1 
             <input type = "radio" name="question17" value = 0>0 
             <input type = "radio" name="question17" value = 1>1
             <input type = "radio" name="question17" value = 2>2 
             <input type = "radio" name="question17" value = 3>3 
         </p>
         <p id="pos"> Your happiness comes more from helping others accomplish things than your own accomplishments.
             <br>
             <input type = "radio" name="question18" value = -3>-3 
             <input type = "radio" name="question18" value = -2>-2 
             <input type = "radio" name="question18" value = -1>-1 
             <input type = "radio" name="question18" value = 0>0 
             <input type = "radio" name="question18" value = 1>1
             <input type = "radio" name="question18" value = 2>2 
             <input type = "radio" name="question18" value = 3>3 
         </p>
         <p id="pos"> You are interested in so many things that you find it difficult to choose what to try next.
             <br>
             <input type = "radio" name="question19" value = -3>-3 
             <input type = "radio" name="question19" value = -2>-2 
             <input type = "radio" name="question19" value = -1>-1 
             <input type = "radio" name="question19" value = 0>0 
             <input type = "radio" name="question19" value = 1>1
             <input type = "radio" name="question19" value = 2>2 
             <input type = "radio" name="question19" value = 3>3 
         </p>
         
         <p id="pos"> You are prone to worrying that things will take a turn for the worse.
             <br>
             <input type = "radio" name="question20" value = -3>-3 
             <input type = "radio" name="question20" value = -2>-2 
             <input type = "radio" name="question20" value = -1>-1 
             <input type = "radio" name="question20" value = 0>0 
             <input type = "radio" name="question20" value = 1>1
             <input type = "radio" name="question20" value = 2>2 
             <input type = "radio" name="question20" value = 3>3  
         </p>
         <p id="pos"> You avoid leadership roles in group settings.<br>
             <input type = "radio" name="question21" value = -3>-3 
             <input type = "radio" name="question21" value = -2>-2 
             <input type = "radio" name="question21" value = -1>-1 
             <input type = "radio" name="question21" value = 0>0 
             <input type = "radio" name="question21" value = 1>1
             <input type = "radio" name="question21" value = 2>2 
             <input type = "radio" name="question21" value = 3>3 
         </p>
         
         <p id="pos"> You are definitely not an artistic type of person.
             <br>
             <input type = "radio" name="question22" value = -3>-3 
             <input type = "radio" name="question22" value = -2>-2 
             <input type = "radio" name="question22" value = -1>-1 
             <input type = "radio" name="question22" value = 0>0 
             <input type = "radio" name="question22" value = 1>1
             <input type = "radio" name="question22" value = 2>2 
             <input type = "radio" name="question22" value = 3>3 
         </p>
           
         <p id="pos"> You think the world would be a better place if people relied more on rationality and less on their feelings.<br>
             <input type = "radio" name="question23" value = -3>-3 
             <input type = "radio" name="question23" value = -2>-2 
             <input type = "radio" name="question23" value = -1>-1 
             <input type = "radio" name="question23" value = 0>0 
             <input type = "radio" name="question23" value = 1>1
             <input type = "radio" name="question23" value = 2>2 
             <input type = "radio" name="question23" value = 3>3 
         </p>
         <p id="pos"> You prefer to do your chores before allowing yourself to relax.
             <br>
             <input type = "radio" name="question24" value = -3>-3 
             <input type = "radio" name="question24" value = -2>-2 
             <input type = "radio" name="question24" value = -1>-1 
             <input type = "radio" name="question24" value = 0>0 
             <input type = "radio" name="question24" value = 1>1
             <input type = "radio" name="question24" value = 2>2 
             <input type = "radio" name="question24" value = 3>3 
         </p>
         <p id="pos"> You enjoy watching people argue.
             <br>
             <input type = "radio" name="question25" value = -3 >-3 
             <input type = "radio" name="question25" value = -2>-2 
             <input type = "radio" name="question25" value = -1>-1 
             <input type = "radio" name="question25" value = 0>0 
             <input type = "radio" name="question25" value = 1>1
             <input type = "radio" name="question25" value = 2>2 
             <input type = "radio" name="question25" value = 3>3 
         </p>
           
         <p id="pos">You tend to avoid drawing attention to yourself.<br>
             <input type = "radio" name="question26" value = -3>-3 
             <input type = "radio" name="question26" value = -2>-2 
             <input type = "radio" name="question26" value = -1>-1 
             <input type = "radio" name="question26" value = 0>0 
             <input type = "radio" name="question26" value = 1>1
             <input type = "radio" name="question26" value = 2>2 
             <input type = "radio" name="question26" value = 3>3 
         </p>
         
         <p id="pos">Your mood can change very quickly.<br>
             <input type = "radio" name="question27" value = -3>-3 
             <input type = "radio" name="question27" value = -2>-2 
             <input type = "radio" name="question27" value = -1>-1 
             <input type = "radio" name="question27" value = 0>0 
             <input type = "radio" name="question27" value = 1>1
             <input type = "radio" name="question27" value = 2>2 
             <input type = "radio" name="question27" value = 3>3 
         </p>
         <p id="pos"> You lose patience with people who are not as efficient as you.<br>
             <input type = "radio" name="question28" value = -3>-3 
             <input type = "radio" name="question28" value = -2 >-2 
             <input type = "radio" name="question28" value = -1>-v1 
             <input type = "radio" name="question28" value = 0 >0 
             <input type = "radio" name="question28" value = 1 >1
             <input type = "radio" name="question28" value = 2 >2 
             <input type = "radio" name="question28" value = 3 >3 
         </p>
         
         <p id="pos"> You often end up doing things at the last possible moment.
             <br>
             <input type = "radio" name="question29">-3 
             <input type = "radio" name="question29" value = -2 >-2 
             <input type = "radio" name="question29" value = -1 >-1 
             <input type = "radio" name="question29" value = 0 >0 
             <input type = "radio" name="question29" value = 1 >1
             <input type = "radio" name="question29" value = 2 >2 
             <input type = "radio" name="question29" value = 3 >3  
         </p> 
       
         <p id="neg"> You have always been fascinated by the question of what, if anything, happens after death.
             <br>
             <input type = "radio" name="question30" value = -3 >-3
             <input type = "radio" name="question30" value = -2 >-2
             <input type = "radio" name="question30" value = -1 >-1 
             <input type = "radio" name="question30" value = 0 >0
             <input type = "radio" name="question30" value = 1 >1
             <input type = "radio" name="question30" value = 2 >2 
             <input type = "radio" name="question30" value = 3 >3 
         </p>
         <p id="neg"> You usually prefer to be around others rather than on your own.
             <br>
             <input type = "radio" name="question31" value = -3 >-3
             <input type = "radio" name="question31" value = -2 >-2
             <input type = "radio" name="question31" value = -1 >-1 
             <input type = "radio" name="question31" value = 0 >0
             <input type = "radio" name="question31" value = 1 >1
             <input type = "radio" name="question31" value = 2 >2 
             <input type = "radio" name="question31" value = 3 >3 
         </p>
         <p id="neg"> You become bored or lose interest when the discussion gets highly theoretical.<br>
             <input type = "radio" name="question32" value = -3 >-3
             <input type = "radio" name="question32" value = -2 >-2
              <input type = "radio" name="question32" value = -1 >-1 
              <input type = "radio" name="question32" value = 0 >0
              <input type = "radio" name="question32" value = 1 >1
         <input type = "radio" name="question32" value = 2 >2 
         <input type = "radio" name="question32" value = 3 >3 
         </p>
         <p id="neg">You find it easy to empathize with a person whose experiences are very different from yours.<br>
             <input type = "radio" name="question33" value = -3 >-3
             <input type = "radio" name="question33" value = -2 >-2
             <input type = "radio" name="question33" value = -1 >-1 
             <input type = "radio" name="question33" value = 0 >0
             <input type = "radio" name="question33" value = 1 >1
             <input type = "radio" name="question33" value = 2 >2 
             <input type = "radio" name="question33" value = 3 >3 </p>
     
       <p id="neg"> You usually postpone finalizing decisions for as long as possible.<br>
         <input type = "radio" name="question34" value = -3 >-3
         <input type = "radio" name="question34" value = -2 >-2
         <input type = "radio" name="question34" value = -1 >-1 
         <input type = "radio" name="question34" value = 0 >0
         <input type = "radio" name="question34" value = 1 >1
         <input type = "radio" name="question34" value = 2 >2 
         <input type = "radio" name="question34" value = 3 >3 
             </p>
             <p id="neg"> You rarely second-guess the choices that you have made.<br>
                 <input type = "radio" name="question35" value = -3 >-3
                 <input type = "radio" name="question35" value = -2 >-2
                 <input type = "radio" name="question35" value = -1 >-1 
                 <input type = "radio" name="question35" value = 0 >0
                 <input type = "radio" name="question35" value = 1 >1
                 <input type = "radio" name="question35" value = 2 >2 
                 <input type = "radio" name="question35" value = 3 >3 
             </p>
     
             
             <p id="pos"> After a long and exhausting week, a lively social event is just what you need.<br>
                 <input type = "radio" name="question36" value = -3 >-3
                 <input type = "radio" name="question36" value = -2 >-2
                 <input type = "radio" name="question36" value = -1 >-1 
                 <input type = "radio" name="question36" value = 0 >0
                 <input type = "radio" name="question36" value = 1 >1
                 <input type = "radio" name="question36" value = 2 >2 
                 <input type = "radio" name="question36" value = 3 >3 
             </p>
             <p id="neg"> You enjoy going to art museums<br>
                 <input type = "radio" name="question37" value = -3 >-3
                 <input type = "radio" name="question37" value = -2 >-2
                 <input type = "radio" name="question37" value = -1 >-1 
                 <input type = "radio" name="question37" value = 0 >0
                 <input type = "radio" name="question37" value = 1 >1
                 <input type = "radio" name="question37" value = 2 >2 
                 <input type = "radio" name="question37" value = 3 >3 
             </p>
             <p id="neg"> You often have a hard time understanding other people’s feelings.<br>
                 <input type = "radio" name="question38" value = -3 >-3
                 <input type = "radio" name="question38" value = -2 >-2
                 <input type = "radio" name="question38" value = -1 >-1 
                 <input type = "radio" name="question38" value = 0 >0
                 <input type = "radio" name="question38" value = 1 >1
                 <input type = "radio" name="question38" value = 2 >2 
                 <input type = "radio" name="question38" value = 3 >3 
             </p>       
             <p id="neg"> You like to have a to-do list for each day.<br>
                 <input type = "radio" name="question39" value = -3 >-3
                 <input type = "radio" name="question39" value = -2 >-2
                 <input type = "radio" name="question39" value = -1 >-1 
                 <input type = "radio" name="question39" value = 0 >0
                 <input type = "radio" name="question39" value = 1 >1
                 <input type = "radio" name="question39" value = 2 >2 
                 <input type = "radio" name="question39" value = 3 >3 </p>
                 <p id="neg">You rarely feel insecure.
                     <br>
                     <input type = "radio" name="question40" value = -3 >-3
                     <input type = "radio" name="question40" value = -2 >-2
                     <input type = "radio" name="question40" value = -1 >-1 
                     <input type = "radio" name="question40" value = 0 >0
                     <input type = "radio" name="question40" value = 1 >1
                     <input type = "radio" name="question40" value = 2 >2 
                     <input type = "radio" name="question40" value = 3 >3 
                 </p>
                 <p id="neg"> You avoid making phone calls.
                     <br>
                     <input type = "radio" name="question41" value = -3 >-3
                     <input type = "radio" name="question41" value = -2 >-2
                     <input type = "radio" name="question41" value = -1 >-1 
                     <input type = "radio" name="question41" value = 0 >0
                     <input type = "radio" name="question41" value = 1 >1
                     <input type = "radio" name="question41" value = 2 >2 
                     <input type = "radio" name="question41" value = 3 >3 
                 </p>
                 <p id="neg"> You often spend a lot of time trying to understand views that are very different from your own.
                     <br>
                     <input type = "radio" name="question42" value = -3 >-3
                     <input type = "radio" name="question42" value = -2 >-2
                     <input type = "radio" name="question42" value = -1 >-1 
                     <input type = "radio" name="question42" value = 0 >0
                     <input type = "radio" name="question42" value = 1 >1
                     <input type = "radio" name="question42" value = 2 >2 
                     <input type = "radio" name="question42" value = 3 >3 
                 </p>
                 <p id="neg"> In your social circle, you are often the one who contacts your friends and initiates activities.
                     <br>
                     <input type = "radio" name="question43" value = -3 >-3
                     <input type = "radio" name="question43" value = -2 >-2
                     <input type = "radio" name="question43" value = -1 >-1 
                     <input type = "radio" name="question43" value = 0 >0
                     <input type = "radio" name="question43" value = 1 >1
                     <input type = "radio" name="question43" value = 2 >2 
                     <input type = "radio" name="question43" value = 3 >3 
                 </p>
             </p>
             <p id="neg"> If your plans are interrupted, your top priority is to get back on track as soon as possible.
                 <br>
                 <input type = "radio" name="question44" value = -3 >-3
                 <input type = "radio" name="question44" value = -2 >-2
                 <input type = "radio" name="question44" value = -1 >-1 
                 <input type = "radio" name="question44" value = 0 >0
                 <input type = "radio" name="question44" value = 1 >1
                 <input type = "radio" name="question44" value = 2 >2 
                 <input type = "radio" name="question44" value = 3 >3 
             </p>
             <p id="neg"> You are still bothered by mistakes that you made a long time ago.
                 <br>
                 <input type = "radio" name="question45" value = -3 >-3
                 <input type = "radio" name="question45" value = -2 >-2
                 <input type = "radio" name="question45" value = -1 >-1 
                 <input type = "radio" name="question45" value = 0 >0
                 <input type = "radio" name="question45" value = 1 >1
                 <input type = "radio" name="question45" value = 2 >2 
                 <input type = "radio" name="question45" value = 3 >3 
             </p>
             <p id="neg"> You rarely contemplate the reasons for human existence or the meaning of life.
                 <br>
                 <input type = "radio" name="question46" value = -3 >-3
                 <input type = "radio" name="question46" value = -2 >-2
                 <input type = "radio" name="question46" value = -1 >-1 
                 <input type = "radio" name="question46" value = 0 >0
                 <input type = "radio" name="question46" value = 1 >1
                 <input type = "radio" name="question46" value = 2 >2 
                 <input type = "radio" name="question46" value = 3 >3 
             </p>
             <p id="neg"> Your emotions control you more than you control them.<br>
                 <input type = "radio" name="question47" value = -3 >-3
                 <input type = "radio" name="question47" value = -2 >-2
                 <input type = "radio" name="question47" value = -1 >-1 
                 <input type = "radio" name="question47" value = 0 >0
                 <input type = "radio" name="question47" value = 1 >1
                 <input type = "radio" name="question47" value = 2 >2 
                 <input type = "radio" name="question47" value = 3 >3 
             </p>
             <p id="neg"> You take great care not to make people look bad, even when it is completely their fault.<br>
                 <input type = "radio" name="question48" value = -3 >-3
                 <input type = "radio" name="question48" value = -2 >-2
                 <input type = "radio" name="question48" value = -1 >-1 
                 <input type = "radio" name="question48" value = 0 >0
                 <input type = "radio" name="question48" value = 1 >1
                 <input type = "radio" name="question48" value = 2 >2 
                 <input type="radio" name="question48" value=3>3
             </p>
             <p id="neg"> Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.<br>
                 <input type = "radio" name="question49" value = -3 >-3
                 <input type = "radio" name="question49" value = -2 >-2
                 <input type = "radio" name="question49" value = -1 >-1 
                 <input type = "radio" name="question49" value = 0 >0
                 <input type = "radio" name="question49" value = 1 >1
                 <input type = "radio" name="question49" value = 2 >2 
                 <input type = "radio" name="question49" value = 3 >3 
             </p>
             <p id="neg"> When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you.<br>
                 <input type = "radio" name="question50" value = -3 >-3
                 <input type = "radio" name="question50" value = -2 >-2
                 <input type = "radio" name="question50" value = -1 >-1 
                 <input type = "radio" name="question50" value = 0 >0
                 <input type = "radio" name="question50" value = 1 >1
                 <input type = "radio" name="question50" value = 2 >2 
                 <input type = "radio" name="question50" value = 3 >3 
             </p>
             <p id="neg"> You would love a job that requires you to work alone most of the time.<br>
                 <input type = "radio" name="question51" value = -3 >-3
                 <input type = "radio" name="question51" value = -2 >-2
                 <input type = "radio" name="question51" value = -1 >-1 
                 <input type = "radio" name="question51" value = 0 >0
                 <input type = "radio" name="question51" value = 1 >1
                 <input type = "radio" name="question51" value = 2 >2 
                 <input type = "radio" name="question51" value = 3 >3 
             </p>
             <p id="neg"> You believe that pondering abstract philosophical questions is a waste of time.<br>
                 <input type = "radio" name="question52" value = -3 >-3
                 <input type = "radio" name="question52" value = -2 >-2
                 <input type = "radio" name="question52" value = -1 >-1 
                 <input type = "radio" name="question52" value = 0 >0
                 <input type = "radio" name="question52" value = 1 >1
                 <input type = "radio" name="question52" value = 2 >2 
                 <input type = "radio" name="question52" value = 3 >3 
             </p>
             
             <p id="neg"> You feel more drawn to places with busy, bustling atmospheres than quiet, intimate places.
                 <br>
                 <input type = "radio" name="question53" value = -3 >-3
                 <input type = "radio" name="question53" value = -2 >-2
                 <input type = "radio" name="question53" value = -1 >-1 
                 <input type = "radio" name="question53" value = 0 >0
                 <input type = "radio" name="question53" value = 1 >1
                 <input type = "radio" name="question53" value = 2 >2 
                 <input type = "radio" name="question53" value = 3 >3 
             </p>
             <p id="neg"> You know at first glance how someone is feeling.
                 <br>
                 <input type = "radio" name="question54" value = -3 >-3
                 <input type = "radio" name="question54" value = -2 >-2
                 <input type = "radio" name="question54" value = -1 >-1 
                 <input type = "radio" name="question54" value = 0 >0
                 <input type = "radio" name="question54" value = 1 >1
                 <input type = "radio" name="question54" value = 2 >2 
                 <input type = "radio" name="question54" value = 3 >3 
             </p>  
             <p id="neg"> You often feel overwhelmed.<br>
                 <input type = "radio" name="question55" value = -3 >-3
                 <input type = "radio" name="question55" value = -2 >-2
                 <input type = "radio" name="question55" value = -1 >-1 
                 <input type = "radio" name="question55" value = 0 >0
                 <input type = "radio" name="question55" value = 1 >1
                 <input type = "radio" name="question55" value = 2 >2 
                 <input type = "radio" name="question55" value = 3 >3 
             </p>
             <p id="neg"> You complete things methodically without skipping over any steps.
                 <br>
                 <input type = "radio" name="question56" value = -3 >-3
                 <input type = "radio" name="question56" value = -2 >-2
                 <input type = "radio" name="question56" value = -1 >-1 
                 <input type = "radio" name="question56" value = 0 >0
                 <input type = "radio" name="question56" value = 1 >1
                 <input type = "radio" name="question56" value = 2 >2 
                 <input type = "radio" name="question56" value = 3 >3 
             </p>
             <p id="neg"> You are very intrigued by things labeled as controversial.
                 <br>
                 <input type = "radio" name="question57" value = -3 >-3
                 <input type = "radio" name="question57" value = -2 >-2
                 <input type = "radio" name="question57" value = -1 >-1 
                 <input type = "radio" name="question57" value = 0 >0
                 <input type = "radio" name="question57" value = 1 >1
                 <input type = "radio" name="question57" value = 2 >2 
                 <input type = "radio" name="question57" value = 3 >3 
             </p>
             <p id="neg"> You would pass along a good opportunity if you thought someone else needed it more.<br>
                 <input type = "radio" name="question58" value = -3 >-3
                 <input type = "radio" name="question58" value = -2 >-2
                 <input type = "radio" name="question58" value = -1 >-1 
                 <input type = "radio" name="question58" value = 0 >0
                 <input type = "radio" name="question58" value = 1 >1
                 <input type = "radio" name="question58" value = 2 >2 
                 <input type = "radio" name="question58" value = 3 >3 
         </p>
         <p id="neg"> You struggle with deadlines.<br>
                 <input type = "radio" name="question59" value = -3 >-3
                 <input type = "radio" name="question59" value = -2 >-2
                 <input type = "radio" name="question59" value = -1 >-1 
                 <input type = "radio" name="question59" value = 0 >0
                 <input type = "radio" name="question59" value = 1 >1
                 <input type = "radio" name="question59" value = 2 >2 
                 <input type = "radio" name="question59" value = 3 >3 
         </p>
         <p id="neg"> You feel confident that things will work out for you.<br>
                 <input type = "radio" name="question60" value = -3 >-3
                 <input type = "radio" name="question60" value = -2 >-2
                 <input type = "radio" name="question60" value = -1 >-1 
                 <input type = "radio" name="question60" value = 0 >0
                 <input type = "radio" name="question60" value = 1 >1
                 <input type = "radio" name="question60" value = 2 >2 
                 <input type = "radio" name="question60" value = 3 >3 
         </p>
     
     <button type="submit" class="btn-submit" onclick=window.location.href="{{url_for('predict')}}">Submit</button> 
     
     
     </form>
     }
}
