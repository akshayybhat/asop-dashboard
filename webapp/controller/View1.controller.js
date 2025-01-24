sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/controls/VizFrame",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
], (Controller, JSONModel, VizFrame, FeedItem) => {
    "use strict";

    return Controller.extend("asopv1.controller.View1", {
        onInit() {
            var oData = {
                PieChartData: [
                    { Category: "99 Pending Review", Value: 40 },
                    { Category: "100 Ready to Submit", Value: 30 },
                    { Category: "201 Pending Approval", Value: 20 }
                ],
                OpenOrders: [
                    { Age: "1-5 Days", Orders: 20 },
                    { Age: "6-10 Days", Orders: 18 },
                    { Age: "11-15 Days", Orders: 16 },
                    { Age: "15+ Days", Orders: 14 },
                    { Age: "Undefined", Orders: 0 }
                ]
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // Configure Pie Chart
            var oPieChart = this.byId("idPieChart");
            oPieChart.setVizProperties({
                title: {
                    text: "Open Orders by Status"
                }
            });

            // Configure Bar Chart
            var oBarChart = this.byId("idBarChart");
            oBarChart.setVizProperties({
                title: {
                    text: "Open Orders by Age"
                },
                plotArea: {
                    dataLabel: {
                        visible: true
                    }
                }
            });
        }
    });
});