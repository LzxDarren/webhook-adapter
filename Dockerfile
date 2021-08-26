FROM registry.cn-shanghai.aliyuncs.com/lizexin/webhook-adapter:1.3
ADD index.js /app/
ADD prometheusalert /app/prometheusalert
EXPOSE 80
ENTRYPOINT ["node", "/app/index.js", "--port=80"]
