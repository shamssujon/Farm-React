/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import ReportConnectedPlantUserDetails from "./PlantUserDetails";
import * as ReportService from "../services/PlantUserDetails";
import * as InitReportService from "../services/PlantUserDetailsInitReport";
import { BrowserRouter } from "react-router-dom";
import * as flavorCodeService from "../../lookups/services/PacUserFlavorList"
 
window.localStorage.setItem("@token", "sampleToken");

const mockedUsedNavigate = jest.fn();
const mockUserParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
  useParams: () => mockUserParams.mockReturnValue({ id: "00000000-0000-0000-0000-000000000000", }),
}));

const mockReportInitService = jest.spyOn(ReportService, "initPage");
const mockReportService = jest.spyOn(ReportService, "submitRequest");
const mockFlavorCodeService = jest.spyOn(flavorCodeService, "submitRequest");

describe("PlantUserDetails Connected Report Component", () => {
  // render the PlantUserDetails component
  beforeEach(() => {
    mockReportInitService.mockResolvedValueOnce({
      data: new InitReportService.InitResultInstance,
    });

    mockFlavorCodeService.mockResolvedValueOnce({
      data: new flavorCodeService.QueryResultTestInstance,
    });

    mockReportService.mockResolvedValue({
      data: new ReportService.QueryResultTestInstance,
    });

    render(
      <BrowserRouter>
        <ReportConnectedPlantUserDetails />
      </BrowserRouter>
    );
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup);


  it("renders correctly", async () => {
    expect(screen.getByTestId("reportConnectedPlantUserDetails")).toBeInTheDocument();
  });

});
