exports.template = function(body) {
    //企业微信群机器人API，https://work.weixin.qq.com/help?person_id=1&doc_id=13376#markdown%E7%B1%BB%E5%9E%8B
    //prometheus alert manager webhook ： https://prometheus.io/docs/alerting/configuration/#webhook_config
    var alerts = body.alerts;
    var noticeMem = [];
    var content = alerts.map(
        alert => {
            if ((alert.labels.alertname).search("f0132618") != -1){
                noticeMem.push("15879433425");
            }else if ((alert.labels.alertname).search("f0409069") != -1){
                noticeMem.push("15879433425");
            }else if ((alert.labels.alertname).search("f0747617") != -1){
                noticeMem.push("18318851403");
            }else if ((alert.labels.alertname).search("f0463143") != -1){
                noticeMem.push("15879433425");
            }else if ((alert.labels.alertname).search("f020315") != -1){
                noticeMem.push("19520526881");
            }
            if (body.status == 'firing'){
                return ["------------------------------"]
                .concat("            告警来了")
                .concat("------------------------------")
                .concat(`告警名称:${alert.labels.alertname}`)
                .concat(`状态:${body.status}`)
                .concat(`告警实例:${alert.labels.instance}`)
                .concat(`告警等级:${alert.labels.severity}`)
                .concat(`结果:${alert.annotations.summary}`)
                .concat(`开始时间:${alert.startsAt}`)
                .concat("------------------------------")
                .concat("\n <@18318851403>")
                .join("\n")
            }
                /*return [`# Name:${alert.labels.alertname}`, "## Labels:"]
                .concat(Object.entries(alert.labels).map(label => `<font color="comment">${label[0]}:</font>${label[1]}`))
                .concat("## Annotations:")
                .concat(Object.entries(alert.annotations).map(annotation => `<font color="comment">${annotation[0]}:</font>${annotation[1]}`))
                .join("\n")*/
            if (body.status == 'resolved'){
                return ["------------------------------"]
                .concat("            告警恢复")
                .concat("------------------------------")
                .concat(`告警名称:${alert.labels.alertname}`)
                .concat(`状态:${body.status}`)
                .concat(`告警实例:${alert.labels.instance}`)
                .concat(`告警等级:${alert.labels.severity}`)
                .concat(`结果:${alert.annotations.summary}`)
                .concat(`开始时间:${alert.startsAt}`)
                .concat(`结束时间:${alert.endsAt}`)
                .concat("------------------------------")
                .join("\n \n<@18318851403>")
            }
            
        }
    ).join("\n\n");
    return {
        msgtype: "markdown",
        text: {
            "content": content
            //"mentioned_mobile_list": [...new Set(noticeMem)]
        }
    }
}
