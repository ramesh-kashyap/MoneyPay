function dataRequest(url, sendData, receiveData, success, fail) {
    var promise = $.ajax({
      type: 'post',
      data: sendData,
      url: '/api' + url
    })
      .done(function (responseData, status, xhr) {
  
        responseJson = JSON.parse(responseData);
  
        if (fail != '') $('#' + fail).hide();
        if (success != '') $('#' + success).hide();
  
        if (typeof responseJson['message'] != "undefined") {
          if (success != '' && responseJson.success == true) {
            $('#' + success).html(responseJson.message);
            $('#' + success).show();
          }
  
          if (fail != '' && responseJson.success == false) {
            $('#' + fail).html(responseJson.message);
            $('#' + fail).show();
          }
        }
  
        $.each(receiveData, function (key, value) {
          $('#' + key).html('');
          $('#' + key).html(responseJson.data[value]);
        });
  
        // preconfigured logic for success
      })
      .fail(function (xhr, status, err) {
        //predetermined logic for unsuccessful request
      });
  
    return promise;
  }
  
  function actionRequest(url, sendData, success, fail) {
    var promise = $.ajax({
      type: 'post',
      data: sendData,
      url: '/api' + url
    })
      .done(function (responseData, status, xhr) {
  
        responseJson = JSON.parse(responseData);
  
        if (fail != '') $('#' + fail).hide();
        if (success != '') $('#' + success).hide();
  
        if (typeof responseJson['message'] != "undefined") {
          if (success != '' && responseJson.success == true) {
            $('#' + success).html(responseJson.message);
            $('#' + success).show();
          }
  
          if (fail != '' && responseJson.success == false) {
            $('#' + fail).html(responseJson.message);
            $('#' + fail).show();
          }
        }
  
        // preconfigured logic for success
      })
      .fail(function (xhr, status, err) {
        //predetermined logic for unsuccessful request
      });
  
    return promise;
  }
  
  
  function actionRequestAlertResponse(url, sendData, successRedirect, failRedirect) {
    var promise = $.ajax({
      type: 'post',
      data: sendData,
      url: '/api' + url
    })
      .done(function (responseData, status, xhr) {
  
        responseJson = JSON.parse(responseData);
  
        if (typeof responseJson['message'] != "undefined") {
  
          alert(responseJson.message);
          if (successRedirect != '' && responseJson.success == true) {
            window.location.href = successRedirect;
          }
  
          if (failRedirect != '' && responseJson.success == false) {
            window.location.href = failRedirect;
          }
        }
  
        // preconfigured logic for success
      })
      .fail(function (xhr, status, err) {
        //predetermined logic for unsuccessful request
      });
  
    return promise;
  }
  
  function formSubmit(parameters) {
  
    if (typeof parameters['action'] == "undefined")
      action = '';
    else
      action = parameters['action'];
  
    if (typeof parameters['method'] == "undefined")
      method = '';
    else
      method = parameters['method'];
  
    if (typeof parameters['target'] == "undefined")
      target = '';
    else
      target = parameters['target'];
  
    if (typeof parameters['data'] == "undefined")
      data = {};
    else
      data = parameters['data'];
  
    var form = jQuery('<form>', {
      'action': action,
      'method': method,
      'target': target
    });
  
    $.each(data, function (key, value) {
      form.append(jQuery('<input>', {
        'name': key,
        'value': value,
        'type': 'hidden'
      }));
    });
  
    form.appendTo('body').submit();
    form.remove();
  
  }
  
  
  function currencyConvert(usdBalance, toCurrency, toCurrencySource) {
  
    var rate = 0;
    var decimalLength = 2;
    $.each(toCurrencySource, function (index, data) {
      if (data.currency.toLowerCase() == toCurrency.toLowerCase()) {
        decimalLength = data.rate.toString().split(".")[1].length;
        if (decimalLength > 8) decimalLength = 8;
        rate = parseFloat(data.rate);
      }
    });
  
    return parseFloat(parseFloat(rate) * parseFloat(usdBalance)).toFixed(decimalLength);
  
  }
  
  function changePage(pageno, obj) {
    var the_form = $(obj).closest("form");
    the_form.append(jQuery('<input>', {
      'name': 'currentpage',
      'value': pageno,
      'type': 'hidden'
    }));
    //console.log(the_form);
    the_form.submit();
  }
  
  function setupAutoScrollDataTable(url, allrowscount, recordsPerPage) {
    $($(window)).scroll(function (event) {
      prepareForAutoScroll(url, allrowscount, recordsPerPage);
    });
    prepareForAutoScroll(url, allrowscount, recordsPerPage);
  }
  
  function prepareForAutoScroll(url, allrowscount, recordsPerPage) {
    var target = $(window);
    var mayLoadContent = (Math.ceil($(target).scrollTop()) + 20) >= ($(document).height() - $(target).height());
  
    if (mayLoadContent) {
  
      var totalPages = allrowscount / recordsPerPage;
  
      if ((allrowscount % recordsPerPage) != 0) {
        totalPages = totalPages + 1;
      }
  
      if (parseInt(totalPages) > parseInt($('[name=currentpage]').val())) {
        $('[name=currentpage]').val(parseInt($('[name=currentpage]').val()) + 1);
  
        var formjson = $('form')
          .serializeArray()
          .reduce(function (json, {
            name,
            value
          }) {
            json[name] = value;
            return json;
          }, {});
  
        autoScrollDataRequest(url, formjson, allrowscount, recordsPerPage)
      }
    }
  }
  
  function autoScrollDataRequest(url, sendData, allrowscount, recordsPerPage) {
    var promise = $.ajax({
      type: 'post',
      data: sendData,
      url: '' + url
    })
      .done(function (responseData, status, xhr) {
        $('#autoscrolldatatable').append($(responseData).find('#autoscrolldatatable').html());
        $('#datarowsremaining').html($(responseData).find('#datarowsremaining').html());
        prepareForAutoScroll(url, allrowscount, recordsPerPage)
  
      })
      .fail(function (xhr, status, err) {
        //predetermined logic for unsuccessful request
      });
  
    return promise;
  }