let Kakao_ID = ""

// CLT SET 
function CLT_Start() {
  Kakao_ID = $('.start-page-input').val();
  if (Kakao_ID == "") {
    window.alert("Kakao ID를 입력해주세요.")
  }
  else {
    $('.start-page').hide();
    $('.question-page').show();
    $('.question-page-CLT').show();
    CLT_Next();
  }
};

let total_q_num = 1;
let total_result = []

let CLT_q_num = 1;

let CLT_negative = 0;
let CLT_neutral = 0;
let CLT_positive = 0;
let CLT_value = 0;


function CLT_Next() {
  if (CLT_q_num == 15) {
    let clicked = $('input:radio[name="inlineRadioOptions"]').is(':checked');
    if (clicked == false) {
      window.alert("응답을 선택해주세요.")
    }
    else {
      // 점수 계산
      if ($('#inlineRadio1').is(':checked')) {
        CLT_negative++;
        CLT_value = 1
      } else if ($('#inlineRadio2').is(':checked')) {
        CLT_negative++;
        CLT_value = 2
      } else if ($('#inlineRadio3').is(':checked')) {
        CLT_neutral++;
        CLT_value = 3
      } else if ($('#inlineRadio4').is(':checked')) {
        CLT_positive++;
        CLT_value = 4
      } else if ($('#inlineRadio5').is(':checked')) {
        CLT_positive++;
        CLT_value = 5
      }
      total_result.push(CLT_value);


      let temp_html = `<div class="result-page-CLT-areas">
                        <div class="result-page-CLT-area1">
                          <div class="result-page-CLT-text-detail"> ${CLT_questions2[CLT_q_num]['contents']} </div>
                          <div class="result-page-CLT-detail progress">
                            <div class="result-page-CLT-progress-bar-detail-${CLT_q_num}-positive result-page-CLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-CLT-progress-bar-detail-value-${CLT_q_num}-positive result-page-CLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-CLT-progress-bar-detail-${CLT_q_num}-nutural result-page-CLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-CLT-progress-bar-detail-value-${CLT_q_num}-nutural result-page-CLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-CLT-progress-bar-detail-${CLT_q_num}-negative result-page-CLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-CLT-progress-bar-detail-value-${CLT_q_num}-negative result-page-CLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                          </div>
                        </div>
                        <div class="result-page-CLT-area2-${CLT_q_num} result-page-CLT-area2">
                          <div class="result-page-CLT-text-detail2-${CLT_q_num} result-page-CLT-text-detail2"> 나의 응답 </div>
                          <div class="result-page-CLT-btn-${CLT_q_num} result-page-CLT-btn result-page-CLT-progress-bar-detail progress-bar
                          progress-bar-success"></div>
                        </div>
                      </div>`
      $('.result-page-CLT-text-details').append(temp_html)
      let btn_value = `.result-page-CLT-btn-${CLT_q_num}`
      if (CLT_value == 1 || CLT_value == 2) {
        $(btn_value).attr('style', 'background-color: #ffbfaa');
      } else if (CLT_value == 3) {
        $(btn_value).attr('style', 'background-color: gainsboro');
      } else if (CLT_value == 4 || CLT_value == 5) {
        $(btn_value).attr('style', 'background-color: #7179e1');
      }

      total_q_num++;
      clicked = false
      $('.question-page-CLT').hide();
      console.log('CLT_negative : ' + CLT_negative);
      console.log('CLT_neutral : ' + CLT_neutral);
      console.log('CLT_positive : ' + CLT_positive);
      FLT_Start();
    }
  } else {
    let clicked = $('input:radio[name="inlineRadioOptions"]').is(':checked');
    if (clicked == false) {
      if (CLT_q_num != 1) {
        window.alert("응답을 선택해주세요.")
      } else {
        $('.question-page-CLT-content').html(CLT_questions[CLT_q_num]['contents']);
        $('.question-page-progress-bar').attr('style', 'width: calc(100 / 35 *' + (total_q_num) + '%)');
        $('.question-page-count').html(total_q_num + ' / 35');
        $('input:radio[name="inlineRadioOptions"]').prop('checked', false);
      }
    } else {
      // 점수 계산
      if ($('#inlineRadio1').is(':checked')) {
        CLT_negative++;
        CLT_value = 1
      } else if ($('#inlineRadio2').is(':checked')) {
        CLT_negative++;
        CLT_value = 2
      } else if ($('#inlineRadio3').is(':checked')) {
        CLT_neutral++;
        CLT_value = 3
      } else if ($('#inlineRadio4').is(':checked')) {
        CLT_positive++;
        CLT_value = 4
      } else if ($('#inlineRadio5').is(':checked')) {
        CLT_positive++;
        CLT_value = 5
      }
      total_result.push(CLT_value);

      let temp_html = `<div class="result-page-CLT-areas">
                        <div class="result-page-CLT-area1">
                          <div class="result-page-CLT-text-detail"> ${CLT_questions2[CLT_q_num]['contents']} </div>
                          <div class="result-page-CLT-detail progress">
                            <div class="result-page-CLT-progress-bar-detail-${CLT_q_num}-positive result-page-CLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-CLT-progress-bar-detail-value-${CLT_q_num}-positive result-page-CLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-CLT-progress-bar-detail-${CLT_q_num}-nutural result-page-CLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-CLT-progress-bar-detail-value-${CLT_q_num}-nutural result-page-CLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-CLT-progress-bar-detail-${CLT_q_num}-negative result-page-CLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-CLT-progress-bar-detail-value-${CLT_q_num}-negative result-page-CLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                          </div>
                        </div>
                        <div class="result-page-CLT-area2-${CLT_q_num} result-page-CLT-area2">
                          <div class="result-page-CLT-text-detail2-${CLT_q_num} result-page-CLT-text-detail2"> 나의 응답 </div>
                          <div class="result-page-CLT-btn-${CLT_q_num} result-page-CLT-btn result-page-CLT-progress-bar-detail progress-bar
                          progress-bar-success"></div>
                        </div>
                      </div>`
      $('.result-page-CLT-text-details').append(temp_html)
      let btn_value = `.result-page-CLT-btn-${CLT_q_num}`
      if (CLT_value == 1 || CLT_value == 2) {
        $(btn_value).attr('style', 'background-color: #ffbfaa');
      } else if (CLT_value == 3) {
        $(btn_value).attr('style', 'background-color: gainsboro');
      } else if (CLT_value == 4 || CLT_value == 5) {
        $(btn_value).attr('style', 'background-color: #7179e1');
      }


      // let detail = `.result-page-CLT-progress-bar-detail-${CLT_q_num}`
      // $(detail).attr('style', 'width: calc(100 / 5 *' + (CLT_value) + '%)');
      // let detail_value = `.result-page-CLT-progress-bar-detail-${CLT_q_num}`
      // $(detail_value).html(100 / 5 * CLT_value + '점');

      CLT_q_num++;
      total_q_num++;
      clicked = false
      CLT_value = 0;

      $('.question-page-CLT-content').html(CLT_questions[CLT_q_num]['contents']);
      $('.question-page-progress-bar').attr('style', 'width: calc(100 / 35 *' + (total_q_num) + '%)');
      $('.question-page-count').html(total_q_num + ' / 35');
      $('input:radio[name="inlineRadioOptions"]').prop('checked', false);

    }
  }
}

var CLT_questions = {
  1: { "contents": "나는 1on1과 미팅을 통해 팀원들과 <br>정기적으로 대화를 나누고 있다." },
  2: { "contents": "나는 1on1과 미팅을 할 때 <br> 일방적으로 이야기하지 않는 편이다." },
  3: { "contents": "나는 1on1과 미팅을 할 때 <br>상대방의 입장에서 이해하려고 노력한다." },
  4: { "contents": "나는 1on1과 미팅을 할 때 팀원의 말에 집중한다." },
  5: { "contents": "나는 관찰하고 인지한 <br>팀원의 업무, 성과와 성장 행동을 바탕으로 <br>팀원과 대화한다." },
  6: { "contents": "나는 1on1과 미팅에서 내 생각을 강요하기보다<br>팀원이 먼저 의견을 충분히 말할 수 있도록 한다." },
  7: { "contents": "나는 팀원이 달성하고 싶은 목표에 대해 질문한다." },
  8: { "contents": "나는 팀원이 주도적으로 일할 수 있도록 <br>지지하는 대화를 나눈다." },
  9: { "contents": "나는 팀원이 달성해야 할 업무 목표를 <br>스스로 세우도록 도와준다." },
  10: { "contents": "나는 나의 감정과 업무를 대하는 태도가 <br>팀원들에게 어떤 영향을 미치는지 이해하고 있다." },
  11: { "contents": "나는 팀원들이 어떤 일을 할 때, 좋은 성과를 내는지 안다." },
  12: { "contents": "나는 팀원들이 업무 및 조직관련 느끼고 있는 <br> 정서 상태에 대해서 이해하고 있다." },
  13: { "contents": "나는 팀원의 동기 저하, 업무 불만 등 <br> 어려운 상황에서도 긍정적 방향으로 대화하는 편이다." },
  14: { "contents": "나는 팀원들 앞에서 내 생각이나 업무 관련 정보를<br>솔직히 공유하는 것이 걱정되지 않는다." },
  15: { "contents": "내 조직 구성원들은 미팅을 할 때 <br>솔직한 이야기를 편하게 나누는 편이다." },
}
var CLT_questions2 = {
  1: { "contents": "나는 1on1과 미팅을 통해 팀원들과 정기적으로 대화를 나누고 있다." },
  2: { "contents": "나는 1on1과 미팅을 할 때 일방적으로 이야기하지 않는 편이다." },
  3: { "contents": "나는 1on1과 미팅을 할 때 상대방의 입장에서 이해하려고 노력한다." },
  4: { "contents": "나는 1on1과 미팅을 할 때 팀원의 말에 집중한다." },
  5: { "contents": "나는 관찰하고 인지한 팀원의 업무, 성과와 성장 행동을 바탕으로 팀원과 대화한다." },
  6: { "contents": "나는 1on1과 미팅에서 내 생각을 강요하기보다 팀원이 먼저 의견을 충분히 말할 수 있도록 한다." },
  7: { "contents": "나는 팀원이 달성하고 싶은 목표에 대해 질문한다." },
  8: { "contents": "나는 팀원이 주도적으로 일할 수 있도록 지지하는 대화를 나눈다." },
  9: { "contents": "나는 팀원이 달성해야 할 업무 목표를 스스로 세우도록 도와준다." },
  10: { "contents": "나는 나의 감정과 업무를 대하는 태도가 팀원들에게 어떤 영향을 미치는지 이해하고 있다." },
  11: { "contents": "나는 팀원들이 어떤 일을 할 때, 좋은 성과를 내는지 안다." },
  12: { "contents": "나는 팀원들이 업무 및 조직관련 느끼고 있는 정서 상태에 대해서 이해하고 있다." },
  13: { "contents": "나는 팀원의 동기 저하, 업무 불만 등 어려운 상황에서도 긍정적 방향으로 대화하는 편이다." },
  14: { "contents": "나는 팀원들 앞에서 내 생각이나 업무 관련 정보를 솔직히 공유하는 것이 걱정되지 않는다." },
  15: { "contents": "내 조직 구성원들은 미팅을 할 때 솔직한 이야기를 편하게 나누는 편이다." },
}


// FLT SET 
function FLT_Start() {
  $('.question-page-FLT').show();
  FLT_Next();
};

let FLT_q_num = 1;

let FLT_negative = 0;
let FLT_neutral = 0;
let FLT_positive = 0;
let FLT_value = 0;

function FLT_Next() {
  if (FLT_q_num == 10) {
    let clicked = $('input:radio[name="FLT_inlineRadioOptions"]').is(':checked');
    if (clicked == false) {
      window.alert("응답을 선택해주세요.")
    } else {
      // 점수 계산
      if ($('#FLT_inlineRadio1').is(':checked')) {
        FLT_negative++;
        FLT_value = 1;
      } else if ($('#FLT_inlineRadio2').is(':checked')) {
        FLT_negative++;
        FLT_value = 2;
      } else if ($('#FLT_inlineRadio3').is(':checked')) {
        FLT_neutral++;
        FLT_value = 3;
      } else if ($('#FLT_inlineRadio4').is(':checked')) {
        FLT_positive++;
        FLT_value = 4;
      } else if ($('#FLT_inlineRadio5').is(':checked')) {
        FLT_positive++;
        FLT_value = 5;
      }
      total_result.push(FLT_value);

      let temp_html = `<div class="result-page-FLT-areas">
                        <div class="result-page-FLT-area1">
                          <div class="result-page-FLT-text-detail"> ${FLT_questions2[FLT_q_num]['contents']} </div>
                          <div class="result-page-FLT-detail progress">
                            <div class="result-page-FLT-progress-bar-detail-${FLT_q_num}-positive result-page-FLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-FLT-progress-bar-detail-value-${FLT_q_num}-positive result-page-FLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-FLT-progress-bar-detail-${FLT_q_num}-nutural result-page-FLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-FLT-progress-bar-detail-value-${FLT_q_num}-nutural result-page-FLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-FLT-progress-bar-detail-${FLT_q_num}-negative result-page-FLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-FLT-progress-bar-detail-value-${FLT_q_num}-negative result-page-FLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                          </div>
                        </div>
                        <div class="result-page-FLT-area2-${FLT_q_num} result-page-FLT-area2">
                          <div class="result-page-FLT-text-detail2-${FLT_q_num} result-page-FLT-text-detail2"> 나의 응답 </div>
                          <div class="result-page-FLT-btn-${FLT_q_num} result-page-FLT-btn result-page-FLT-progress-bar-detail progress-bar
                          progress-bar-success"></div>
                        </div>
                      </div>`
      $('.result-page-FLT-text-details').append(temp_html)
      let btn_value = `.result-page-FLT-btn-${FLT_q_num}`
      if (FLT_value == 1 || FLT_value == 2) {
        $(btn_value).attr('style', 'background-color: #ffbfaa');
      } else if (FLT_value == 3) {
        $(btn_value).attr('style', 'background-color: gainsboro');
      } else if (FLT_value == 4 || FLT_value == 5) {
        $(btn_value).attr('style', 'background-color: #7179e1');
      }

      total_q_num++;
      clicked = false
      $('.question-page-FLT').hide();
      console.log('FLT_negative : ' + FLT_negative);
      console.log('FLT_neutral : ' + FLT_neutral);
      console.log('FLT_positive : ' + FLT_positive);
      RLT_Start();
    }
  } else {
    let clicked = $('input:radio[name="FLT_inlineRadioOptions"]').is(':checked');
    if (clicked == false) {
      if (FLT_q_num != 1) {
        window.alert("응답을 선택해주세요.")
      } else {
        $('.question-page-FLT-content').html(FLT_questions[FLT_q_num]['contents']);
        $('.question-page-progress-bar').attr('style', 'width: calc(100 / 35 *' + (total_q_num) + '%)');
        $('.question-page-count').html(total_q_num + ' / 35');
        $('input:radio[name="FLT_inlineRadioOptions"]').prop('checked', false);
      }
    } else {
      // 점수 계산
      if ($('#FLT_inlineRadio1').is(':checked')) {
        FLT_negative++;
        FLT_value = 1;
      } else if ($('#FLT_inlineRadio2').is(':checked')) {
        FLT_negative++;
        FLT_value = 2;
      } else if ($('#FLT_inlineRadio3').is(':checked')) {
        FLT_neutral++;
        FLT_value = 3;
      } else if ($('#FLT_inlineRadio4').is(':checked')) {
        FLT_positive++;
        FLT_value = 4;
      } else if ($('#FLT_inlineRadio5').is(':checked')) {
        FLT_positive++;
        FLT_value = 5;
      }
      total_result.push(FLT_value);
      let temp_html = `<div class="result-page-FLT-areas">
                        <div class="result-page-FLT-area1">
                          <div class="result-page-FLT-text-detail"> ${FLT_questions2[FLT_q_num]['contents']} </div>
                          <div class="result-page-FLT-detail progress">
                            <div class="result-page-FLT-progress-bar-detail-${FLT_q_num}-positive result-page-FLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-FLT-progress-bar-detail-value-${FLT_q_num}-positive result-page-FLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-FLT-progress-bar-detail-${FLT_q_num}-nutural result-page-FLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-FLT-progress-bar-detail-value-${FLT_q_num}-nutural result-page-FLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-FLT-progress-bar-detail-${FLT_q_num}-negative result-page-FLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-FLT-progress-bar-detail-value-${FLT_q_num}-negative result-page-FLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                          </div>
                        </div>
                        <div class="result-page-FLT-area2-${FLT_q_num} result-page-FLT-area2">
                          <div class="result-page-FLT-text-detail2-${FLT_q_num} result-page-FLT-text-detail2"> 나의 응답 </div>
                          <div class="result-page-FLT-btn-${FLT_q_num} result-page-FLT-btn result-page-FLT-progress-bar-detail progress-bar
                          progress-bar-success"></div>
                        </div>
                      </div>`
      $('.result-page-FLT-text-details').append(temp_html)
      let btn_value = `.result-page-FLT-btn-${FLT_q_num}`
      if (FLT_value == 1 || FLT_value == 2) {
        $(btn_value).attr('style', 'background-color: #ffbfaa');
      } else if (FLT_value == 3) {
        $(btn_value).attr('style', 'background-color: gainsboro');
      } else if (FLT_value == 4 || FLT_value == 5) {
        $(btn_value).attr('style', 'background-color: #7179e1');
      }

      FLT_q_num++;
      total_q_num++;
      clicked = false;
      FLT_value = 0;

      $('.question-page-FLT-content').html(FLT_questions[FLT_q_num]['contents']);
      $('.question-page-progress-bar').attr('style', 'width: calc(100 / 35 *' + (total_q_num) + '%)');
      $('.question-page-count').html(total_q_num + ' / 35');
      $('input:radio[name="FLT_inlineRadioOptions"]').prop('checked', false);

    }
  }
}


var FLT_questions = {
  1: { "contents": "나는 일방적 피드백을 하지 않는다." },
  2: { "contents": "나는 명확한 기준 또는 합의한 방향을 바탕으로 <br> 피드백 대화를 나눈다." },
  3: { "contents": "나는 평가, 체크인 등 정해진 시기 뿐만 아니라 <br> 수시로 팀원들과 피드백 대화를 나눈다." },
  4: { "contents": "나는 객관적인 상황과 행동에 기반하여 <br>피드백 대화를 나눈다." },
  5: { "contents": "나는 피드백 대화를 할 때 기대사항을 명확하게 설명한다." },
  6: { "contents": "나는 팀원의 성장 목표/방향 관련 정보와 지원 방법에 <br>대해 피드백을 제공하는 편이다." },
  7: { "contents": "나는 팀원의 업무 관련 어려움과 고충에 대해 <br>피드백 대화를 통해 해결하고자 노력한다." },
  8: { "contents": "나는 팀원의 감정을 가장 우선 존중하며 <br>의미있는 피드백 대화를 하려고 노력한다." },
  9: { "contents": "나는 일회성으로 피드백을 하기보다 팀원의 행동 변화에 따라 달라지는 필요한 사항을 지속 지원하는 편이다." },
  10: { "contents": "나는 조직내 건강하고 활발한 피드백 문화를 <br>만들어나가고 있다." },
}
var FLT_questions2 = {
  1: { "contents": "나는 일방적 피드백을 하지 않는다." },
  2: { "contents": "나는 명확한 기준 또는 합의한 방향을 바탕으로 피드백 대화를 나눈다." },
  3: { "contents": "나는 평가, 체크인 등 정해진 시기 뿐만 아니라 수시로 팀원들과 피드백 대화를 나눈다." },
  4: { "contents": "나는 객관적인 상황과 행동에 기반하여 피드백 대화를 나눈다." },
  5: { "contents": "나는 피드백 대화를 할 때 기대사항을 명확하게 설명한다." },
  6: { "contents": "나는 팀원의 성장 목표/방향 관련 정보와 지원 방법에 대해 피드백을 제공하는 편이다." },
  7: { "contents": "나는 팀원의 업무 관련 어려움과 고충에 대해 피드백 대화를 통해 해결하고자 노력한다." },
  8: { "contents": "나는 팀원의 감정을 가장 우선 존중하며 의미있는 피드백 대화를 하려고 노력한다." },
  9: { "contents": "나는 일회성으로 피드백을 하기보다 팀원의 행동 변화에 따라 달라지는 필요한 사항을 지속 지원하는 편이다." },
  10: { "contents": "나는 조직내 건강하고 활발한 피드백 문화를 만들어나가고 있다." },
}


// RLT SET
function RLT_Start() {
  $('.question-page-RLT').show();
  RLT_Next();
};

let RLT_q_num = 1;

let RLT_negative = 0;
let RLT_neutral = 0;
let RLT_positive = 0;
let RLT_value = 0;

function RLT_Next() {
  if (RLT_q_num == 10) {
    let clicked = $('input:radio[name="RLT_inlineRadioOptions"]').is(':checked');
    if (clicked == false) {
      window.alert("응답을 선택해주세요.");
    } else {
      // 점수 계산
      if ($('#RLT_inlineRadio1').is(':checked')) {
        RLT_negative++;
        RLT_value = 1;
      } else if ($('#RLT_inlineRadio2').is(':checked')) {
        RLT_negative++;
        RLT_value = 2;
      } else if ($('#RLT_inlineRadio3').is(':checked')) {
        RLT_neutral++;
        RLT_value = 3;
      } else if ($('#RLT_inlineRadio4').is(':checked')) {
        RLT_positive++;
        RLT_value = 4;
      } else if ($('#RLT_inlineRadio5').is(':checked')) {
        RLT_positive++;
        RLT_value = 5;
      }
      total_result.push(RLT_value);

      let temp_html = `<div class="result-page-RLT-areas">
                        <div class="result-page-RLT-area1">
                          <div class="result-page-RLT-text-detail"> ${RLT_questions2[RLT_q_num]['contents']} </div>
                          <div class="result-page-RLT-detail progress">
                            <div class="result-page-RLT-progress-bar-detail-${RLT_q_num}-positive result-page-RLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-RLT-progress-bar-detail-value-${RLT_q_num}-positive result-page-RLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-RLT-progress-bar-detail-${RLT_q_num}-nutural result-page-RLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-RLT-progress-bar-detail-value-${RLT_q_num}-nutural result-page-RLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-RLT-progress-bar-detail-${RLT_q_num}-negative result-page-RLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-RLT-progress-bar-detail-value-${RLT_q_num}-negative result-page-RLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                          </div>
                        </div>
                        <div class="result-page-RLT-area2-${RLT_q_num} result-page-RLT-area2">
                          <div class="result-page-RLT-text-detail2-${RLT_q_num} result-page-RLT-text-detail2"> 나의 응답 </div>
                          <div class="result-page-RLT-btn-${RLT_q_num} result-page-RLT-btn result-page-RLT-progress-bar-detail progress-bar
                          progress-bar-success"></div>
                        </div>
                      </div>`
      $('.result-page-RLT-text-details').append(temp_html)
      let btn_value = `.result-page-RLT-btn-${RLT_q_num}`
      if (RLT_value == 1 || RLT_value == 2) {
        $(btn_value).attr('style', 'background-color: #ffbfaa');
      } else if (RLT_value == 3) {
        $(btn_value).attr('style', 'background-color: gainsboro');
      } else if (RLT_value == 4 || RLT_value == 5) {
        $(btn_value).attr('style', 'background-color: #7179e1');
      }

    }

    console.log('RLT_negative : ' + RLT_negative);
    console.log('RLT_neutral : ' + RLT_neutral);
    console.log('RLT_positive : ' + RLT_positive);

    $('.question-page-RLT').hide();
    $('.question-page').hide();
    $('.result-page').show();

    $('.result-page-kakao').html(Kakao_ID + '님의 CFR Self Check 결과');
    $('.result-page-CLT-progress-bar').attr('style', 'width: calc(100 / 15 *' + (CLT_positive) + '%)');
    $('.result-page-FLT-progress-bar').attr('style', 'width: calc(100 / 10 *' + (FLT_positive) + '%)');
    $('.result-page-RLT-progress-bar').attr('style', 'width: calc(100 / 10 *' + (RLT_positive) + '%)');

    let CLT_positive_value = parseInt(100 / 15 * CLT_positive);
    let FLT_positive_value = parseInt(100 / 10 * FLT_positive);
    let RLT_positive_value = parseInt(100 / 10 * RLT_positive);

    $('.result-page-CLT-progress-bar-text').html('나의 긍정응답률 : ' + CLT_positive_value + '%');
    $('.result-page-FLT-progress-bar-text').html('나의 긍정응답률 : ' + FLT_positive_value + '%');
    $('.result-page-RLT-progress-bar-text').html('나의 긍정응답률 : ' + RLT_positive_value + '%');

    let CLT_result = [CLT_negative, CLT_neutral, CLT_positive]
    let FLT_result = [FLT_negative, FLT_neutral, FLT_positive]
    let RLT_result = [RLT_negative, RLT_neutral, RLT_positive]

    $.ajax({
      type: "POST",
      url: '/result',
      data: {
        Kakao_ID: Kakao_ID,
        total_result: JSON.stringify({ total_result: total_result }),
        CLT_result: JSON.stringify({ CLT_result: CLT_result }),
        FLT_result: JSON.stringify({ FLT_result: FLT_result }),
        RLT_result: JSON.stringify({ RLT_result: RLT_result }),
      },
      success: function (response) {
        console.log("응답이 정상적으로 기록되었습니다.")
        let total_number = response['total_number']
        let CLT_average_P = response['CLT_average_P']
        let FLT_average_P = response['FLT_average_P']
        let RLT_average_P = response['RLT_average_P']

        let total_CLT_list = response['total_CLT_list']
        let total_FLT_list = response['total_FLT_list']
        let total_RLT_list = response['total_RLT_list']

        for (let i = 0; i < 15; i++) {
          let detail_positive = `.result-page-CLT-progress-bar-detail-${i + 1}-positive`
          $(detail_positive).attr('style', 'width: calc(100 *' + (total_CLT_list[i][2]) + '%)');
          $(detail_positive).css('background-color', '#7179e1')
          let detail_value_positive = `.result-page-CLT-progress-bar-detail-value-${i + 1}-positive`
          $(detail_value_positive).html(Math.ceil(100 * total_CLT_list[i][2]) + '%');

          let detail_nutural = `.result-page-CLT-progress-bar-detail-${i + 1}-nutural`
          $(detail_nutural).attr('style', 'width: calc(100 *' + (total_CLT_list[i][1]) + '%)');
          $(detail_nutural).css('background-color', 'gainsboro')
          let detail_value_nutural = `.result-page-CLT-progress-bar-detail-value-${i + 1}-nutural`
          $(detail_value_nutural).html(Math.floor(100 * total_CLT_list[i][1]) + '%');

          let detail_negative = `.result-page-CLT-progress-bar-detail-${i + 1}-negative`
          $(detail_negative).attr('style', 'width: calc(100 *' + (total_CLT_list[i][0]) + '%)');
          $(detail_negative).css('background-color', '#ffbfaa')
          let detail_value_negative = `.result-page-CLT-progress-bar-detail-value-${i + 1}-negative`
          $(detail_value_negative).html(Math.floor(100 * total_CLT_list[i][0]) + '%');
        }

        for (let i = 0; i < 10; i++) {
          let detail_positive = `.result-page-FLT-progress-bar-detail-${i + 1}-positive`
          $(detail_positive).attr('style', 'width: calc(100 *' + (total_FLT_list[i][2]) + '%)');
          $(detail_positive).css('background-color', '#7179e1')
          let detail_value_positive = `.result-page-FLT-progress-bar-detail-value-${i + 1}-positive`
          $(detail_value_positive).html(Math.ceil(100 * total_FLT_list[i][2]) + '%');

          let detail_nutural = `.result-page-FLT-progress-bar-detail-${i + 1}-nutural`
          $(detail_nutural).attr('style', 'width: calc(100 *' + (total_FLT_list[i][1]) + '%)');
          $(detail_nutural).css('background-color', 'gainsboro')
          let detail_value_nutural = `.result-page-FLT-progress-bar-detail-value-${i + 1}-nutural`
          $(detail_value_nutural).html(Math.floor(100 * total_FLT_list[i][1]) + '%');

          let detail_negative = `.result-page-FLT-progress-bar-detail-${i + 1}-negative`
          $(detail_negative).attr('style', 'width: calc(100 *' + (total_FLT_list[i][0]) + '%)');
          $(detail_negative).css('background-color', '#ffbfaa')
          let detail_value_negative = `.result-page-FLT-progress-bar-detail-value-${i + 1}-negative`
          $(detail_value_negative).html(Math.floor(100 * total_FLT_list[i][0]) + '%');
        }

        for (let i = 0; i < 10; i++) {
          let detail_positive = `.result-page-RLT-progress-bar-detail-${i + 1}-positive`
          $(detail_positive).attr('style', 'width: calc(100 *' + (total_RLT_list[i][2]) + '%)');
          $(detail_positive).css('background-color', '#7179e1')
          let detail_value_positive = `.result-page-RLT-progress-bar-detail-value-${i + 1}-positive`
          $(detail_value_positive).html(Math.ceil(100 * total_RLT_list[i][2]) + '%');

          let detail_nutural = `.result-page-RLT-progress-bar-detail-${i + 1}-nutural`
          $(detail_nutural).attr('style', 'width: calc(100 *' + (total_RLT_list[i][1]) + '%)');
          $(detail_nutural).css('background-color', 'gainsboro')
          let detail_value_nutural = `.result-page-RLT-progress-bar-detail-value-${i + 1}-nutural`
          $(detail_value_nutural).html(Math.floor(100 * total_RLT_list[i][1]) + '%');

          let detail_negative = `.result-page-RLT-progress-bar-detail-${i + 1}-negative`
          $(detail_negative).attr('style', 'width: calc(100 *' + (total_RLT_list[i][0]) + '%)');
          $(detail_negative).css('background-color', '#ffbfaa')
          let detail_value_negative = `.result-page-RLT-progress-bar-detail-value-${i + 1}-negative`
          $(detail_value_negative).html(Math.floor(100 * total_RLT_list[i][0]) + '%');
        }


        $('.result-page-CLT-total-progress-bar').attr('style', 'width: calc(1 *' + (CLT_average_P) + '%)');
        $('.result-page-FLT-total-progress-bar').attr('style', 'width: calc(1 *' + (FLT_average_P) + '%)');
        $('.result-page-RLT-total-progress-bar').attr('style', 'width: calc(1 *' + (RLT_average_P) + '%)');
        $('.result-page-CLT-total-progress-bar-text').html('전사 긍정응답률 : ' + CLT_average_P + '%');
        $('.result-page-FLT-total-progress-bar-text').html('전사 긍정응답률 : ' + FLT_average_P + '%');
        $('.result-page-RLT-total-progress-bar-text').html('전사 긍정응답률 : ' + RLT_average_P + '%');
        $('.result-page-text-small-total').html('전사 : ' + total_number + '명 참여')
      }
    })

  } else {
    let clicked = $('input:radio[name="RLT_inlineRadioOptions"]').is(':checked');
    if (clicked == false) {
      if (RLT_q_num != 1) {
        window.alert("응답을 선택해주세요.")
      } else {
        $('.question-page-RLT-content').html(RLT_questions[RLT_q_num]['contents']);
        $('.question-page-progress-bar').attr('style', 'width: calc(100 / 35 *' + (total_q_num) + '%)');
        $('.question-page-count').html(total_q_num + ' / 35');
        $('input:radio[name="inlineRadioOptions"]').prop('checked', false);
      }
    } else {
      // 점수 계산
      if ($('#RLT_inlineRadio1').is(':checked')) {
        RLT_negative++;
        RLT_value = 1;
      } else if ($('#RLT_inlineRadio2').is(':checked')) {
        RLT_negative++;
        RLT_value = 2;
      } else if ($('#RLT_inlineRadio3').is(':checked')) {
        RLT_neutral++;
        RLT_value = 3;
      } else if ($('#RLT_inlineRadio4').is(':checked')) {
        RLT_positive++;
        RLT_value = 4;
      } else if ($('#RLT_inlineRadio5').is(':checked')) {
        RLT_positive++;
        RLT_value = 5;
      }
      total_result.push(RLT_value);
      let temp_html = `<div class="result-page-RLT-areas">
                        <div class="result-page-RLT-area1">
                          <div class="result-page-RLT-text-detail"> ${RLT_questions2[RLT_q_num]['contents']} </div>
                          <div class="result-page-RLT-detail progress">
                            <div class="result-page-RLT-progress-bar-detail-${RLT_q_num}-positive result-page-RLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-RLT-progress-bar-detail-value-${RLT_q_num}-positive result-page-RLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-RLT-progress-bar-detail-${RLT_q_num}-nutural result-page-RLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-RLT-progress-bar-detail-value-${RLT_q_num}-nutural result-page-RLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                            <div class="result-page-RLT-progress-bar-detail-${RLT_q_num}-negative result-page-RLT-progress-bar-detail progress-bar progress-bar-success" role="progressbar"
                              aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                              <div class="result-page-RLT-progress-bar-detail-value-${RLT_q_num}-negative result-page-RLT-progress-bar-detail-value"> 점수 </div>
                            </div>
                          </div>
                        </div>
                        <div class="result-page-RLT-area2-${RLT_q_num} result-page-RLT-area2">
                          <div class="result-page-RLT-text-detail2-${RLT_q_num} result-page-RLT-text-detail2"> 나의 응답 </div>
                          <div class="result-page-RLT-btn-${RLT_q_num} result-page-RLT-btn result-page-RLT-progress-bar-detail progress-bar
                          progress-bar-success"></div>
                        </div>
                      </div>`
      $('.result-page-RLT-text-details').append(temp_html)
      let btn_value = `.result-page-RLT-btn-${RLT_q_num}`
      if (RLT_value == 1 || RLT_value == 2) {
        $(btn_value).attr('style', 'background-color: #ffbfaa');
      } else if (RLT_value == 3) {
        $(btn_value).attr('style', 'background-color: gainsboro');
      } else if (RLT_value == 4 || RLT_value == 5) {
        $(btn_value).attr('style', 'background-color: #7179e1');
      }

      RLT_q_num++;
      total_q_num++;
      clicked = false;

      $('.question-page-RLT-content').html(RLT_questions[RLT_q_num]['contents']);
      $('.question-page-progress-bar').attr('style', 'width: calc(100 / 35 *' + (total_q_num) + '%)');
      $('.question-page-count').html(total_q_num + ' / 35');
      $('input:radio[name="RLT_inlineRadioOptions"]').prop('checked', false);

    }
  }
}

var RLT_questions = {
  1: { "contents": "나는 수시로 격려하고 칭찬한다." },
  2: { "contents": "나는 구체적인 사실(업무 성과, 기존 목표대비 결과물 등)기반으로 팀원과 인정 대화를 나눈다." },
  3: { "contents": "나는 인정의 대화를 할 때 <br>팀원이 조직에게 기여한 사항이나 <br>의미있는 진전(결과)을 언급한다." },
  4: { "contents": "나는 팀원이 성취감을 느끼는 것(업무, 역할, 기여 등)이 무엇인지 이해하고 있다." },
  5: { "contents": "나는 팀원이 주도성을 발휘하는 것(업무, 역할, 기여 등)이 무엇인지 이해하고 있다." },
  6: { "contents": "나는 팀원의 주도적 성장을 지지하는 질문과 <br>발전적인 제안을 하는 편이다." },
  7: { "contents": "나는 조직내 건강한 인정 문화를 만들어나가고 있다." },
  8: { "contents": "나는 팀원들과 신뢰 관계를 가지고자 노력하고 있다." },
  9: { "contents": "나는 일회성 인정을 하기보다 <br>지속적으로 팀원의 노력을 지원하고, 지지하는 편이다." },
  10: { "contents": "나는 인정의 대화가 일부 팀원들에게 <br>치우치지 않도록 노력한다." },
}

var RLT_questions2 = {
  1: { "contents": "나는 수시로 격려하고 칭찬한다." },
  2: { "contents": "나는 구체적인 사실(업무 성과, 기존 목표대비 결과물 등)기반으로 팀원과 인정 대화를 나눈다." },
  3: { "contents": "나는 인정의 대화를 할 때 팀원이 조직에게 기여한 사항이나 의미있는 진전(결과)을 언급한다." },
  4: { "contents": "나는 팀원이 성취감을 느끼는 것(업무, 역할, 기여 등)이 무엇인지 이해하고 있다." },
  5: { "contents": "나는 팀원이 주도성을 발휘하는 것(업무, 역할, 기여 등)이 무엇인지 이해하고 있다." },
  6: { "contents": "나는 팀원의 주도적 성장을 지지하는 질문과 발전적인 제안을 하는 편이다." },
  7: { "contents": "나는 조직내 건강한 인정 문화를 만들어나가고 있다." },
  8: { "contents": "나는 팀원들과 신뢰 관계를 가지고자 노력하고 있다." },
  9: { "contents": "나는 일회성 인정을 하기보다 지속적으로 팀원의 노력을 지원하고, 지지하는 편이다." },
  10: { "contents": "나는 인정의 대화가 일부 팀원들에게 치우치지 않도록 노력한다." },
}

function check() {
  $.ajax({
    type: "POST",
    url: '/check',
    data: {
      Kakao_ID: Kakao_ID,
      CLT_result: JSON.stringify({ CLT_result: CLT_result }),
      FLT_result: JSON.stringify({ FLT_result: FLT_result }),
      RLT_result: JSON.stringify({ RLT_result: RLT_result }),
    },
    success: function (response) {
      console.log("응답이 정상적으로 기록되었습니다.")
    }
  })
}

function bodyShot() {
  //전체 스크린 샷하기 
  let screenshot = Kakao_ID + "님의 Self Check 결과"
  html2canvas(document.body)
    .then(function (canvas) {
      drawImg(canvas.toDataURL('image/png'));
      saveAs(canvas.toDataURL(), screenshot);
    }).catch(function (err) { console.log(err); });
}


function drawImg(imgData) {
  console.log(imgData);
  return new Promise(function reslove() {
    var canvas = document.getElementById('canvas'); var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var imageObj = new Image();
    imageObj.onload = function () {
      ctx.drawImage(imageObj, 10, 10);
    }; imageObj.src = imgData;
  }, function reject() { });
}

function saveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}


